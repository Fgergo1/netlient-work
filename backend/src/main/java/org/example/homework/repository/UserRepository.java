package org.example.homework.repository;
import org.example.homework.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    boolean existsByUserName(String username);
}
