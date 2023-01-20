package com.moksnow.jugroup;

import com.moksnow.jugroup.model.Event;
import com.moksnow.jugroup.model.Group;
import com.moksnow.jugroup.repository.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
public class Initializer implements CommandLineRunner {

    private final GroupRepository groupRepository;

    public Initializer(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        Stream.of("Tehran JUG", "Eindhoven JUG", "Amsterdam JUG", "Utrecht JUG")
                .forEach(name -> groupRepository.save(new Group(name)));

        Group jug = groupRepository.findByName("Tehran JUG");

        Event e = Event.builder().title("Micro Front by kriaof in ajax")
                .description("mohammadreza will comes to netherland")
                .date(Instant.parse("2023-01-28T10:00:00.000Z"))
                .build();

        jug.setEvents(Collections.singleton(e));

        groupRepository.save(jug);

        groupRepository.findAll().forEach(System.out::println);
    }
}
