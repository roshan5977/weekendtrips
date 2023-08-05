package com.feuji.orderservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feuji.orderservice.entity.TransactionRequest;
import com.feuji.orderservice.entity.TransactionResponse;
import com.feuji.orderservice.model.Order;
import com.feuji.orderservice.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/bookOrder")
	public TransactionResponse bookOrder(@RequestBody TransactionRequest request) {
		return orderService.saveOrder(request);
	}

}
