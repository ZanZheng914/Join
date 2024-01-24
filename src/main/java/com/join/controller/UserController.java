package com.join.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.join.anno.Log;
import com.join.pojo.User;
import com.join.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/user")
@RestController
public class UserController {
	//處理HTTP請求，登入、註冊、登出
	@Autowired
	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@GetMapping
	public List<User> getAllUsers(){
		return userService.list();
	}
	@GetMapping("/username/{username}")
	public User getUserByUsername(@PathVariable String username) {
		return userService.getUserByUsername(username);
	}
	@GetMapping("/name/{name}")
	public User getUserByName(@PathVariable String name) {
		return userService.getUserByName(name);
	}
	
	@GetMapping("/{userId}")
	public User getUserById(@PathVariable Integer userId){
		return userService.getById(userId);
	}
	//新增用戶
	@Log
	@PostMapping
	public void insertUser(@RequestBody User user) {
		userService.save(user);
	}
	//更新用戶
	@PutMapping("/{userId}")
	public void updateUser(@PathVariable Integer userId,@RequestBody User user) {
		user.setUserId(userId);
		userService.update(user);
	}
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userService.login(user);
	}
	
	public void deleteUser(@RequestBody List<Integer> ids) {
		userService.delete(ids);
	}
				
}
