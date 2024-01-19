package com.join.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	private Integer productId;
	private Integer shopId;
	private String productName;
	private Integer price;
}