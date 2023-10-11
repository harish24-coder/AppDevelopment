package com.example.demo.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.UserRegisterEntity;
import com.example.demo.service.UserRegisterService;
@CrossOrigin("*")


@RequestMapping("/reg")
@RestController
public class UserRegisterController {
  @Autowired
  private UserRegisterService userRegisterService;
  @GetMapping("/getUserRegister")
  public List<UserRegisterEntity> getUserRegister(){
    return userRegisterService.getUserRegister();
  }
  @GetMapping("/getUserRegister/{id}")
  public Optional<UserRegisterEntity> getUserRegisterbyId(@PathVariable int id){
    return userRegisterService.getUserRegisterbyId(id);
  }
  @PostMapping("/postUserRegister")
  public void postUserRegister(@RequestBody UserRegisterEntity ure) {
    userRegisterService.postUserRegister(ure);
  }
  @PutMapping("/putUserRegister/{id}")
  public void putUserRegister(@PathVariable int id,@RequestBody UserRegisterEntity ure)
  {
    ure.setUserRegisterId(id);
    userRegisterService.putUserRegister(ure);
  }
  @DeleteMapping("/delUserRegister/{id}")
  public void deleteUserRegister(@PathVariable int id)
  {
    userRegisterService.deleteUserRegister(id);
  }
  

}