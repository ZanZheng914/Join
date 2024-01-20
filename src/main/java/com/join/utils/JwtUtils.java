package com.join.utils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.join.pojo.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtils {
	private static String signKey="zan";
	private static Long expire = 43200000L;
	
	//生成jwt令牌
	public static String generateJwt(User user) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("userId",user.getUserId());
		claims.put("username", user.getUsername());
		
		String jwt=Jwts.builder()
			.addClaims(claims)
			.signWith(SignatureAlgorithm.HS256, signKey)
			.setExpiration(new Date(System.currentTimeMillis()+expire))
			.compact();
		return jwt;
	}
	//解析jwt令牌
	public static Claims parseJWT(String jwt) {
		Claims claims = Jwts.parser()
				.setSigningKey(signKey)
				.parseClaimsJws(jwt)
				.getBody();
		return claims;
	}	
}
