package com.feuji.weekendtripssecurity.authentication;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.feuji.weekendtripssecurity.configuration.JwtService;
import com.feuji.weekendtripssecurity.user.User;
import com.feuji.weekendtripssecurity.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	// regiser the user save in db generate token and refresh token and return
	public AuthenticationResponse register(RegisterRequest request) {

//		CryptoJS.AES.decrypt(encrypted_string, secret)
		var user = User.builder().firstname(request.getFirstname()).lastname(request.getLastname())
				.email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
				.role(request.getRole()).status(request.getStatus()).age(request.getAge()).gender(request.getGender())
				.mobileNumber(request.getMobileNumber()).build();
		repository.save(user);
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
	}

//	authenticating by manager and call to save token generating tooken and refresh token and  return
	public Map<String, Object> authenticate(AuthenticationRequest request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		User user = repository.findByEmail(request.getEmail()).orElseGet(()-> new User());
		var jwtToken = jwtService.generateToken(user);

		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("user", user);
		responseMap.put("token", jwtToken);

		return responseMap;
	}

	class UserNotFound extends UsernameNotFoundException {

		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

		public UserNotFound(String msg) {
			super(msg);
		}

	}
}