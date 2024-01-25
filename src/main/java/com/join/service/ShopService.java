package com.join.service;

import java.util.List;

import com.join.pojo.Shop;

public interface ShopService {
	
	List<Shop> getAllShops();
	
    Shop getShopById(Integer shopId);
}
