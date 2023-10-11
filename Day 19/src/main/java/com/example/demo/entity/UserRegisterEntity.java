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
@Table(name="UserRegister")
public class UserRegisterEntity {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int UserRegisterId;
  private String Fullname;
  public int getUserRegisterId() {
    return UserRegisterId;
  }
  public void setUserRegisterId(int userRegisterId) {
    UserRegisterId = userRegisterId;
  }
  public String getFullname() {
    return Fullname;
  }
  public void setFullname(String fullname) {
    Fullname = fullname;
  }
  public Long getMobile() {
    return Mobile;
  }
  public void setMobile(Long mobile) {
    Mobile = mobile;
  }
  public String getEmail() {
    return Email;
  }
  public void setEmail(String email) {
    Email = email;
  }
  public String getPassword() {
    return Password;
  }
  public void setPassword(String password) {
    Password = password;
  }
  private Long Mobile;
  private String Email;
  private String Password;


}