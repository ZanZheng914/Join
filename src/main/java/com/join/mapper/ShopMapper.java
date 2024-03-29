package com.join.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.join.pojo.Shop;

@Mapper
public interface ShopMapper {
	@Select("SELECT * FROM shop")
	List<Shop> getAllShops();
	
	@Select("SELECT * FROM shop WHERE shopId=#{shopId}")
	Shop getShopById(Integer shopId);
}
