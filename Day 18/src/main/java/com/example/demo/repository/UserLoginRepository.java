package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.UserLoginEntity;


public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}