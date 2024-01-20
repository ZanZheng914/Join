package com.join.pojo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public class OperateLog {
	private Integer id;
	private Integer operateUser;
	private LocalDateTime operateTime;
	private String className;
	private String methodName;
	private String methodParams;
	private String returnValue;
	
	//由於版本或依賴問題，無法使用AllArgsConstroctor，固手動建立
    public OperateLog(Integer id, Integer operateUser, LocalDateTime operateTime, String className,
            String methodName, String methodParams, String returnValue) {
		this.id = id;
		this.operateUser = operateUser;
		this.operateTime = operateTime;
		this.className = className;
		this.methodName = methodName;
		this.methodParams = methodParams;
		this.returnValue = returnValue;
    }
	
}
