package com.feuji.paymentservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feuji.paymentservice.model.Payment;
import com.feuji.paymentservice.service.PaymentService;

@CrossOrigin(origins = "**", allowedHeaders = "**")

@RestController
@RequestMapping("/weekend")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;

	@PostMapping("/dopayment")
	public Payment doPayment(@RequestBody Payment payment) {
		return paymentService.doPayment(payment);
	}

}
