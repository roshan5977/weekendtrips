package com.sarudr.weekendtripservice.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarudr.weekendtripservice.model.Coupon;
import com.sarudr.weekendtripservice.repository.CouponRepository;
import com.sarudr.weekendtripservice.service.CouponService;

@Service
public class CouponServiceImpl implements CouponService {

	@Autowired
	private CouponRepository couponRepository;

	@Override
	public List<Coupon> getAllCoupons() {
		return couponRepository.findAll();
	}

}