package com.feuji.orderservice.service;

import com.feuji.orderservice.entity.TransactionRequest;
import com.feuji.orderservice.entity.TransactionResponse;
import com.feuji.orderservice.model.Order;

public interface OrderService {

	

	public TransactionResponse saveOrder(TransactionRequest request);

}
