package com.feuji.weekendtripssecurity.authentication;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.feuji.weekendtripssecurity.service.UserService;
import com.feuji.weekendtripssecurity.user.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "**", allowedHeaders = "**")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {

	private final AuthenticationService service;

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.register(request));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticationRequest request) {
		return ResponseEntity.ok(service.authenticate(request));
	}

	@GetMapping("/getallusers")
	public ResponseEntity<List<User>> getAllLogins() {
		return ResponseEntity.ok(userService.getAllUsers());
	}

	@GetMapping("/getuserarray")
	public ResponseEntity<List<String>> getAllUserArray() {
		return ResponseEntity
				.ok(userService.getAllUsers().stream().map(e -> e.getEmail()).collect(Collectors.toList()));
	}

	@PutMapping(value = "/updateuser/{userId}")
	public User updateUser(@PathVariable(value = "userId") Integer userId, @RequestBody User user) {
		return userService.updateUser(userId, user);
	}

	@PostMapping(value = "/changepassword")
	public User changePass(@RequestBody ResetPassword resetPassword) {
		log.info("came" + resetPassword);

		return userService.changePassword(resetPassword);
	}

	@DeleteMapping(value = "/changestatusofuser/{userId}")
	public ResponseEntity<Optional<User>> changeStatusOfUser(@PathVariable(value = "userId") Integer userId) {
		return ResponseEntity.ok(userService.changeStatusById(userId));
	}

	@DeleteMapping(value = "/changestatusofuserbyEmail/{useremail}")
	public ResponseEntity<Optional<User>> changeStatusOfUserByEmail(
			@PathVariable(value = "useremail") String useremail) {
		return ResponseEntity.ok(userService.changeStatusByEmail(useremail));
	}

}
