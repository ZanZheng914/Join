package com.join.pojo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Shop {
	private Integer id;
	private String name;
	private String tel;
	private String address;
	private LocalDateTime joinTime;
	
}
