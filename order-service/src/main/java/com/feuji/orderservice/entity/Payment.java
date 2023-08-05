package com.feuji.orderservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

	private  Integer paymentId;
    private String paymentStatus;
	private String transactionId;
	private int orderId;
	private double amount;

}
