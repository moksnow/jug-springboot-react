package com.moksnow.jugroup.controller;

import com.moksnow.jugroup.model.Group;
import com.moksnow.jugroup.repository.GroupRepository;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
@Log4j2
@AllArgsConstructor
public class GroupController {

    private GroupRepository groupRepository;

    @GetMapping("/groups")
    private List<Group> groups() {
        return groupRepository.findAll();
    }
    @GetMapping("/group/{id}")
    private ResponseEntity<Group> getGroup(@PathVariable Long id) {
        Optional<Group> group = groupRepository.findById(id);
        return group.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/group")
    private ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException{
        log.info("Request to create Group: {}", group);
        Group res = groupRepository.save(group);
        return ResponseEntity.created(new URI("/api/group/" + res.getId())).body(res);
    }
    @PutMapping("/group/{id}")
    private ResponseEntity<Group> updateGroup(@Valid @RequestBody Group group){
        log.info("Request to update Group: {}", group);
        Group res = groupRepository.save(group);
        return ResponseEntity.ok().body(res);
    }
    @PostMapping("/group/{id}")
    private ResponseEntity<?> deleteGroup(@PathVariable Long id){
        log.info("Request to delete Group: {}", id);
        groupRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
