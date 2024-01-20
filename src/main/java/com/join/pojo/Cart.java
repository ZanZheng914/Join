package com.join.pojo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	private Integer cartId;
	private Integer userId;
	private Integer totalPrice;
	private LocalDateTime createTime;
}
