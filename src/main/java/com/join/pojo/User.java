package com.join.pojo;

import java.time.LocalDate;

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
	private LocalDate createTime;
	
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
    public void setCreateTime(LocalDate createTime) {
        this.createTime = createTime;
    }
    public String getCompany() {
    	return company;
    }
	public String getdept() {
		return dept;
	}
}
