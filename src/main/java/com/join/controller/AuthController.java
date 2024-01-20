package com.join.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.mindrot.jbcrypt.*;

import com.join.pojo.User;
import com.join.service.UserService;
import com.join.utils.JwtUtils;

@RestController
public class AuthController {
	private UserService userService;
	private JwtUtils jwtUtils;
	
    @Autowired
    public AuthController(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

	@PostMapping("/login")
	public String login(@RequestBody User user) {
		//從資料庫獲取使用者資訊，依據使用者名稱
		User storedUser = userService.getUserByUsername(user.getUsername());
				

		
	//驗證密碼
	if(storedUser != null && BCrypt.checkpw(user.getPassword(), storedUser.getPassword())) {
		//生成令牌
		return jwtUtils.generateJwt(storedUser);
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
