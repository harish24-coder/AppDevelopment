package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserRegisterEntity;
import com.example.demo.repository.UserRegisterRepository;


@Service
public class UserRegisterService {

  @Autowired
  private UserRegisterRepository userRegisterRepository;
  public List<UserRegisterEntity> getUserRegister(){
    return userRegisterRepository.findAll();
  }
  public Optional<UserRegisterEntity> getUserRegisterbyId(int id)
  {
    return userRegisterRepository.findById(id);
  }
  public void postUserRegister(UserRegisterEntity ure) {
    userRegisterRepository.save(ure);
  }
  public UserRegisterEntity putUserRegister(UserRegisterEntity ure) {
    return userRegisterRepository.save(ure);
  }
  public void deleteUserRegister(int id) {
    userRegisterRepository.deleteById(id);
  }
}