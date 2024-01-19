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
	private LocalDate creatTime;
}
