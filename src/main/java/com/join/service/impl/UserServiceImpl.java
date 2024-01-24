package com.join.service.impl;

import com.join.mapper.UserMapper;
import com.join.pojo.User;
import com.join.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public List<User> list() {
        // Implement as needed
        return null;
    }

    @Override
    public User getById(Integer userId) {
        // Implement as needed
        return null;
    }
    
    @Override
    @Transactional
    public void save(User user) {
        userMapper.insertUser(user);
    }

    @Override
    public void update(User user) {
        // Implement as needed
    }

    @Override
    public User login(User user) {
        // Implement login logic using userMapper
        return userMapper.getUserByUsernameAndPassword(user.getUsername(),user.getPassword());
    }

    @Override
    public void delete(List<Integer> ids) {
        // Implement as needed
    }

    @Override
    public User getUserByUsername(String username) {
        return userMapper.getUserByUsername(username);
    }

	@Override
	public User getUserByName(String name) {
		return userMapper.getUserByName(name);
	}
}
