package com.feuji.weekendtripssecurity.authentication;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.feuji.weekendtripssecurity.service.UserService;
import com.feuji.weekendtripssecurity.user.User;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "**", allowedHeaders = { "Authorization", "Origin" })
@RestController
@RequestMapping("/weekend")
@Slf4j
public class WeekendController {

	@Autowired
	UserService service;

	@GetMapping("/test")
	public ResponseEntity<String> sayHello() {
		return ResponseEntity.ok("Hello from secured endpoint");
	}

	@GetMapping("/getallusers")
	public ResponseEntity<List<User>> getAllLogins() {
		return ResponseEntity.ok(service.getAllUsers());
	}

	@PutMapping(value = "/updateuser/{userId}")
	public User updateUser(@PathVariable(value = "userId") Integer userId, @RequestBody User user) {
		return service.updateUser(userId, user);
	}

	@PostMapping(value = "/changepassword")
	public User changePass(@RequestBody ResetPassword resetPassword) {
		log.info("came" + resetPassword);

		return service.changePassword(resetPassword);
	}

	@DeleteMapping(value = "/changestatusofuser/{userId}")
	public ResponseEntity<Optional<User>> changeStatusOfUser(@PathVariable(value = "userId") Integer userId) {
		return ResponseEntity.ok(service.changeStatusById(userId));
	}

	@PostMapping("/savecity")
	public ResponseEntity<String> saveCity() {
		return ResponseEntity.ok("city saved");
	}

	@Autowired
	private RestTemplate restTemplate;

	@DeleteMapping("/changestatusofcity/{cityId}")
	public ResponseEntity<String> changeStatusOfCity(@PathVariable(value = "cityId") Long cityId) {

		String url = "http://localhost:9101/weekendtrip/city/changestatusofcity/" + cityId;

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		HttpEntity<String> entity = new HttpEntity<>(headers);
		ResponseEntity<String> entity2 = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

		if (entity2.getStatusCode().is2xxSuccessful()) {
			return ResponseEntity.ok().body(entity2.getBody());

		} else {
			throw new ArithmeticException();
		}

	}

	// pdf generation for user
//	@GetMapping("/pdf/user/{travellerId}")
//	public ResponseEntity<String> generatePdfForUser(@PathVariable(value = "travellerId") long travellerId) {
//
//		String url = "http://localhost:8082/tour/weekendtrip/traveller/pdf/user/" + travellerId;
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		HttpEntity<String> entity = new HttpEntity<>(url);
//
//		ResponseEntity<String> resttemplate = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
//
//		if (resttemplate.getStatusCode().is2xxSuccessful()) {
//			return ResponseEntity.ok().body(resttemplate.getBody());
//		} else {
//			throw new ArithmeticException();
//		}
//	}
//
//	// payment amount sent
//	@GetMapping("/payment/{amount}/{id}")
//	public ResponseEntity<String> paymentStatus(@PathVariable int amount, @PathVariable int id) {
//
//		String url = "http://localhost:8082/tour/weekendtrip/traveller/payment/" + amount + "/" + id;
//
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		HttpEntity<String> entity = new HttpEntity<>(url);
//
//		ResponseEntity<String> resttemplate = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
//
//		if (resttemplate.getStatusCode().is2xxSuccessful()) {
//			return ResponseEntity.ok().body(resttemplate.getBody());
//		} else {
//			throw new ArithmeticException();
//		}
//	}
//
}
