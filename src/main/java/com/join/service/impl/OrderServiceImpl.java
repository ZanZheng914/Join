package com.join.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.join.mapper.OrderMapper;
import com.join.pojo.Orders;
import com.join.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
	
	private final OrderMapper orderMapper;
	
	@Autowired
	public OrderServiceImpl (OrderMapper orderMapper) {
		this.orderMapper=orderMapper;
	}

	@Override
	public Orders getOrderById(Integer orderId) {
		return orderMapper.getOrderById(orderId);
	}
	
	
	
	
	
	
	
}
