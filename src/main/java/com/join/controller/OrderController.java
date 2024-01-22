package com.join.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.join.pojo.Orders;
import com.join.service.OrderService;

@RequestMapping("/order")
@RestController
public class OrderController {
	private final OrderService orderService;
	
	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService=orderService;
	}
	@GetMapping("/{orderId}")
	public Orders getOrderById(@PathVariable Integer orderId) {
		return orderService.getOrderById(orderId);
	}
}
