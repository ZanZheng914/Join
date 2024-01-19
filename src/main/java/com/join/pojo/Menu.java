package com.join.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
	private Integer id;
	private Integer shopid;
	private String product;
	private Integer price;
}