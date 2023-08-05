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

import com.sarudr.weekendtripservice.model.Place;
import com.sarudr.weekendtripservice.service.PlacesService;

@CrossOrigin(origins = "*", allowedHeaders = "**")
@RestController
@RequestMapping("/place")
public class PlacesController {

	@Autowired
	PlacesService service;

	@GetMapping(value = "/findAllPlaces")
	public ResponseEntity<List<Place>> findAllPlaces() {
		return ResponseEntity.ok(service.getPlaces());
	}

	@ResponseBody
	@PostMapping(value = "/savePlace", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Place> savePlace(@RequestBody Place place) {
		return ResponseEntity.ok(service.savePlace(place));
	}

	@DeleteMapping(value = "/changeStatusOfPlace/{placeId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> changeStatusOfPlace(@PathVariable(value = "placeId") long placeId) {
		service.changeStatus(placeId);
		return ResponseEntity.ok().body("place are inactivated");
	}

	@PutMapping(value = "/updatePlaceByPlaceId/{placeId}")
	public Place updatePlaceByPlaceId(@PathVariable(value = "placeId") long placeId, @RequestBody Place place) {
		return service.updatePlace(placeId, place);
	}

	@ResponseBody
	@PostMapping(value = "/saveplacebypackid/{packId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Place> savePlaceByPackId(@PathVariable(value = "packId") long packId,
			@RequestBody Place place) {
		return ResponseEntity.ok(service.saveplaceById(packId, place));
	}

}
