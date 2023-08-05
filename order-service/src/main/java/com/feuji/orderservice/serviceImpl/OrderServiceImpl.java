package com.feuji.orderservice.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.feuji.orderservice.entity.Payment;
import com.feuji.orderservice.entity.TransactionRequest;
import com.feuji.orderservice.entity.TransactionResponse;
import com.feuji.orderservice.model.Order;
import com.feuji.orderservice.repository.OrderRepository;
import com.feuji.orderservice.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	@Lazy
	private RestTemplate restTemplate;

//	private String EndPointUrl="";

	

	@Override
	public TransactionResponse saveOrder(TransactionRequest request) {

		Order order = request.getOrder();
		Payment payment = request.getPayment();

		order.setOrderId(0);// just to overcome error
		payment.setOrderId(order.getOrderId());
		payment.setAmount(order.getPrice());

		Payment paymentresponse = restTemplate.postForObject("http://PAYMENT-SERVICE/payment/dopayment", payment,
				Payment.class);

		String response = paymentresponse.getPaymentStatus().equals("success")
				? "payment processing sucessfull order placed"
				: "payment failed order added to cart";

		Order order2 = orderRepository.save(order);

		return new TransactionResponse(order2, order2.getPrice(), paymentresponse.getTransactionId(), response);
	}

}

//before build

//
