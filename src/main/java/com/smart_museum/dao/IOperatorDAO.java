package com.smart_museum.dao;
import java.util.List;
import com.smart_museum.entity.Operator;

public interface IOperatorDAO {
    List<Operator> getAllOperators();
    Operator getOperatorById(int operatorId);
    void addOperator(Operator operator);
    void updateOperator(Operator operator);
    void deleteOperator(int operatorId);
    boolean operatorExists(String name);
}
 
