package com.join.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
	private Integer orderItemId;
	private Integer orderId;
	private Integer productId;
	private Integer quantity;
	private Integer price;
	private Integer subTotal;
}
