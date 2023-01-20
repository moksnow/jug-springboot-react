package com.moksnow.jugroup.repository;

import com.moksnow.jugroup.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {

    Group findByName(String name);
}
