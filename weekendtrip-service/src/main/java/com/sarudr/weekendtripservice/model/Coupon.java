package com.sarudr.weekendtripservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "coupons")
public class Coupon {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int couponId;
	private String couponName;
	private String description;
	private int discount;
	private String status;

	public int getCouponId() {
		return couponId;
	}

	public void setCouponId(int couponId) {
		this.couponId = couponId;
	}

	public String getCouponName() {
		return couponName;
	}

	public void setCouponName(String couponName) {
		this.couponName = couponName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Coupon(int couponId, String couponName, String description, int discount, String status) {
		super();
		this.couponId = couponId;
		this.couponName = couponName;
		this.description = description;
		this.discount = discount;
		this.status = status;
	}

	public Coupon() {
		super();
	}

}