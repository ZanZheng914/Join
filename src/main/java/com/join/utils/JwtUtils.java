package com.join.utils;

import java.util.Date;
import java.util.Map;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtUtils {
	private static SecretKey secretKey=Keys.secretKeyFor(SignatureAlgorithm.HS256);
	private static Long expire = 43200000L;
	
	//生成jwt令牌
	public static String generateJwt(Map<String, Object> claims) {
				
		String jwt=Jwts.builder()
			.addClaims(claims)
			.signWith(secretKey)
			.setExpiration(new Date(System.currentTimeMillis()+expire))
			.compact();
		return jwt;
	}
	//解析jwt令牌
	public static Claims parseJWT(String jwt) {
		Claims claims = Jwts.parserBuilder()
				.setSigningKey(secretKey)
				.build()
				.parseClaimsJws(jwt)
				.getBody();
		return claims;
	}	
}
