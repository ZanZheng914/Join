package com.join.mapper;

import org.apache.ibatis.annotations.Insert;

import com.join.pojo.OperateLog;

public interface OperateLogMapper {

	//插入日誌數據
	@Insert("INSERT INTO operate_log (operate_user,operate_time, class_name, method_name, method_params,return_value)"
			+"VALUES (#{operateUser},#{operateTime},#{className},#{methodName},#{methodParams},#{returnValue});")
	public void insert(OperateLog log);
}
