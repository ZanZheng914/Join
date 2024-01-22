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
	
	@Select("SELECT * FROM user")
	List<User> list();
	
	//新增用戶
	@Insert("INSERT INTO user(username, password, name, email, gender, company, dept, createTime) " +
            "VALUES(#{username}, #{password}, #{name}, #{email}, #{gender}, #{company}, #{dept}, #{createTime})")
	void insertUesr(User user);

	//修改用戶 by userId
	@Update("UPDATE user SET username = #{username}, password = #{password}, name = #{name}, " +
            "email = #{email}, gender = #{gender}, company = #{company}, dept = #{dept}, createTime = #{createTime} " +
            "WHERE userId = #{userId}")
	void updateUser(User user);
	
	//刪除用戶
	@Delete("DELETE FROM user WHERE userId=#{userId}")
	void deleteUser(Integer userId);


	//查詢用戶
	@ResultMap("UserResultMap")
	@Select("SELECT * FROM user WHERE userId=#{userId)")
	User getUserById(Integer userId);
	
	@ResultMap("UserResultMap")
	@Select("SELECT * FROM user WHERE username = #{username}")
	User getUserByUsername(@Param("username") String username);




}
