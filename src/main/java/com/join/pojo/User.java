package com.join.pojo;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	private Integer userId;
	private String username;
	private String password;
	private String name;
	private String email;
	private Short gender;
	private String company;
	private String dept;
	private LocalDate creatTime;
	
	public void setUserId(Integer userId) {
		this.userId=userId;
	}

	public Integer getUserId() {
		return userId;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String hashedPassword) {
		this.password=hashedPassword;
		
	}
	
	private List<Cart> cart;
}
