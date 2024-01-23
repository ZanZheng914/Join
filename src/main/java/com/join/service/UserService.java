package com.join.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.join.pojo.User;
@Transactional
public interface UserService {

	//處理註冊、登入
	
	//查詢全部用戶
	List<User> list();
	
	//根據id查詢用戶
	User getById(Integer userId);
	
	//新增用戶
	void save(User user);
	
	//更新用戶
	void update(User user);
	
	User login(User user);
	
	//批量刪除操作
	void delete(List<Integer> ids);
	
	//根據用戶名獲取用戶
	User getUserByUsername(String username);

	
}
