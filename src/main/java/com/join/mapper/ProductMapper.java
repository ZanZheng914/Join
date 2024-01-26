package com.join.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
//import org.apache.ibatis.annotations.Update;

import com.join.pojo.Product;

@Mapper
public interface ProductMapper {
	//資料庫處理，查詢商品列表
	@Select("SELECT * FROM product")
	List<Product> getAllProducts();
	
	@Select("SELECT * FROM product WHERE shopId=#{shopId}")
	List<Product> getProductByShopId(Integer shopId);
	
	@Insert("INSERT INTO product(shopId, productName,price) VALUES(#{shopId},#{productName},#{price})")
	void addProduct(Product product);

//	@Update("UPDATE product SET shopId=#{shopId},productName=#{productName},price=#{price} WHERE productId=#{productId}")
	void updateProduct(Product product);
	
	@Delete("DELETE FROM product WHERE productId=#{productId}")
	void deleteProduct(Integer productId);
}
