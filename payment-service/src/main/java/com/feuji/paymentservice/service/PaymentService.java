package com.feuji.paymentservice.service;

import com.feuji.paymentservice.model.Payment;

public interface PaymentService {

	public String paymentProcessing();

	Payment doPayment(Payment payment);

}
