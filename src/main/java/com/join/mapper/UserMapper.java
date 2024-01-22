package com.join.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;

import com.join.pojo.User;

@Mapper
public interface UserMapper {
	//資料庫操作，CRUD

	List<User> list();
	
	void insertUesr(User user);

	void updateUser(User user);

	void deleteUser(Integer userId);


	//查詢用戶
	User getUserById(Integer userId);
	
	User getUserByUsername(@Param("username") String username);




}
