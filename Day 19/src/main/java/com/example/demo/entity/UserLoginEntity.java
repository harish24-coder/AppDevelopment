package com.example.demo.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="UserLogin")
public class UserLoginEntity {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int userLoginId;
  private String username;
  public int getUserLoginId() {
    return userLoginId;
  }
  public void setUserLoginId(int userLoginId) {
    this.userLoginId = userLoginId;
  }
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  private String password;


}