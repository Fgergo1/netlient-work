package org.example.homework.service;

import org.example.homework.DTO.UserDTO;
import org.example.homework.model.UserEntity;
import org.example.homework.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean registerUserToDataBase (UserDTO user) {
        UserEntity userEntity = new UserEntity(user.getUserName(), user.getPassword());
        if (!userRepository.existsByUserName(user.getUserName())) {
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }

    public boolean CheckUserIsInTheDataBase (UserDTO user) {
        return userRepository.existsByUserName(user.getUserName());
    }
}
