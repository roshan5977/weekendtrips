package com.sarudr.weekendtripservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sarudr.weekendtripservice.model.Coupon;
import com.sarudr.weekendtripservice.service.CouponService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "**")
@RequestMapping(value = "/coupon")
public class CouponController {
	@Autowired
	private CouponService couponService;

	@GetMapping(value = "/findallcoupon")
	public ResponseEntity<List<Coupon>> getAllCoupons() {
		List<Coupon> coupons = couponService.getAllCoupons();
		return ResponseEntity.ok().body(coupons);

	}

}