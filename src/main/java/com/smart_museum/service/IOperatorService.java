package com.smart_museum.service;

import java.util.List;

import com.smart_museum.entity.Operator;

public interface IOperatorService {
     List<Operator> getAllOperators();
     Operator getOperatorById(int operatorId);
     boolean addOperator(Operator operator);
     void updateOperator(Operator operator);
     void deleteOperator(int operatorId);
}
