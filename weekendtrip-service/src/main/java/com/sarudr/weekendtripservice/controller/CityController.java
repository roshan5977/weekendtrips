package com.sarudr.weekendtripservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sarudr.weekendtripservice.model.City;
import com.sarudr.weekendtripservice.service.CityService;

@CrossOrigin(origins = "*", allowedHeaders = "**")
@RestController
@RequestMapping("/city")
public class CityController {

	@Autowired
	private CityService cityService;

	@GetMapping("/getallcities")
	public ResponseEntity<List<City>> getAllCities() {
		return ResponseEntity.ok(cityService.getAllCities());
	}

	@ResponseBody
	@PostMapping(value = "/savecity", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<City> saveCity(@RequestBody City city) {
		return ResponseEntity.ok(cityService.saveCity(city));
	}

	@PutMapping(value = "/updatecity/{cityId}")
	public City updatecity(@PathVariable(value = "cityId") long cityId, @RequestBody City city) {
		return cityService.updateCity(cityId, city);
	}

	@DeleteMapping(value = "/changestatusofcity/{cityId}")
	public ResponseEntity<City> changeStatusOfCity(@PathVariable(value = "cityId") long cityId) {
		cityService.changeStatus(cityId);
		return ResponseEntity.ok(cityService.getById(cityId));
	}

}
