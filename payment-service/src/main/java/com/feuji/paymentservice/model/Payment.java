package com.feuji.paymentservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer paymentId;
	private String paymentStatus;
	private String transactionId;
	private int orderId;
	private double amount;

}
