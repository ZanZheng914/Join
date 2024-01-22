package com.join.mapper;

import org.apache.ibatis.annotations.Param;

import com.join.pojo.Orders;

public interface OrderMapper {
	Orders getOrderById(@Param("orderId") Integer orderId);
}
