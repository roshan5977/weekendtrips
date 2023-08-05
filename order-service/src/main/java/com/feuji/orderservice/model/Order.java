package com.feuji.orderservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "orders")
public class Order {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id 
	
	private Integer orderId;

	private String name;

	private int quantity;

	private double price;
}
