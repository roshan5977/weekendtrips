package com.feuji.paymentservice.serviceimplementation;

import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feuji.paymentservice.model.Payment;
import com.feuji.paymentservice.repository.PaymentRepository;
import com.feuji.paymentservice.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {
	private static final Random random = new Random(); // Create a single instance of Random

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public String paymentProcessing() {
		return random.nextBoolean() ? "success" : "failure"; // Reuse the random instance
	}

	@Override
	public Payment doPayment(Payment payment) {
		payment.setTransactionId(UUID.randomUUID().toString());
		payment.setPaymentStatus(paymentProcessing());
		paymentRepository.save(payment);
		return paymentRepository.save(payment);
	}
}
