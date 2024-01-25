package com.join.service.impl;

import com.join.mapper.ShopMapper;
import com.join.pojo.Shop;
import com.join.service.ShopService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShopServiceImpl implements ShopService {

    private final ShopMapper shopMapper;

    @Autowired
    public ShopServiceImpl(ShopMapper shopMapper) {
        this.shopMapper = shopMapper;
    }

    @Override
    public List<Shop> getAllShops() {
        return shopMapper.getAllShops();
    }

    @Override
    public Shop getShopById(Integer shopId) {
        return shopMapper.getShopById(shopId);
    }
}
