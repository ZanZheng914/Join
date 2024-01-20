package com.join.aop;

import java.time.LocalDateTime;
import java.util.Arrays;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSONObject;
import com.join.anno.Log;
import com.join.mapper.OperateLogMapper;
import com.join.pojo.OperateLog;
import com.join.utils.JwtUtils;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Aspect
public class LogAspect {
	//使用loggerFactory獲取日誌
	private static final Logger log = LoggerFactory.getLogger(LogAspect.class);

	@Autowired
	private HttpServletRequest request;
	@Autowired
	private OperateLogMapper operateLogMapper;
	@Around("@annotation(com.join.anno.Log)")
	public Object recordLog(ProceedingJoinPoint joinPoint)throws Throwable {
		//獲取header中的jwt令牌
		String jwt = request.getHeader("token");
		Claims claims = JwtUtils.parseJWT(jwt);
		//當前登錄者ID
		Integer operateUser=(Integer) claims.get("id");
		//操作時間
		LocalDateTime operateTime = LocalDateTime.now();
		String className= joinPoint.getTarget().getClass().getName();
		String methodName =joinPoint.getSignature().getName();
		//操作方法參數
		Object[] args=joinPoint.getArgs();
		String methodParams=Arrays.toString(args);
		
		Object result= joinPoint.proceed();
		String returnValue =JSONObject.toJSONString(result);
		
		//紀錄操作日誌
		OperateLog operateLog = new OperateLog(null,operateUser,operateTime,className,methodName,methodParams,returnValue);
		operateLogMapper.insert(operateLog);
		
		
		log.info("AOP操作日誌:{}",operateLog);
		
		return result;
	}
}
