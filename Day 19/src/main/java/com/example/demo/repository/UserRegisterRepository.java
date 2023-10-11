package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.UserRegisterEntity;



public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}