package com.join.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import org.mindrot.jbcrypt.*;

import com.join.pojo.User;
import com.join.service.UserService;
import com.join.utils.JwtUtils;

@RestController
public class AuthController {
	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public String login(@RequestBody User user) {
		//從資料庫獲取使用者資訊，依據使用者名稱
		User storedUser = userService.login(user);

	//驗證密碼
	if(storedUser != null && BCrypt.checkpw(user.getPassword(), storedUser.getPassword())) {
		//生成令牌
		Map<String,Object> claims =new HashMap<>();
		claims.put("userId", storedUser.getUserId());
		claims.put("username", storedUser.getUsername());
		String jwt = JwtUtils.generateJwt(claims);
		
		return jwt;
	}else {
		return "Login failed";
	}
}
	
	
	@PostMapping("/register")
	public void register(@RequestBody User user) {
		String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashedPassword);
		
		userService.save(user);
	}
	
	public void logout(@RequestHeader("Authorization") String token) {
		
	}
	
	
	
	
}
