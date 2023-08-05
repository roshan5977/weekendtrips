package com.sarudr.weekendtripservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sarudr.weekendtripservice.model.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Integer> {

}