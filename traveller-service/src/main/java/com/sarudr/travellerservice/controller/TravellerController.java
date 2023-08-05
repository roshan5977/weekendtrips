package com.sarudr.travellerservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.base.Optional;
import com.sarudr.travellerservice.model.Passenger;
import com.sarudr.travellerservice.model.Traveller;
import com.sarudr.travellerservice.service.PassengersService;
import com.sarudr.travellerservice.service.TravellersService;

@CrossOrigin(origins = "**", allowedHeaders = "**")
@RestController
@RequestMapping("/weekend")
public class TravellerController {

	@Autowired
	private TravellersService travellersService;

	@Autowired
	PassengersService passengersService;

	@GetMapping("/getalltravellers")
	public ResponseEntity<List<Traveller>> getAllTraveller() {
		return ResponseEntity.ok(travellersService.getTraveller());
	}

	@GetMapping("/gettraveller/{id}")
	public ResponseEntity<Traveller> getTravellerById(@PathVariable(value = "id") long id) {
		return ResponseEntity.ok(travellersService.getTravellerById(id));
	}

	@PostMapping(value = "/savetraveller", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Traveller> saveTraveller(@RequestBody Traveller traveller) {
		return ResponseEntity.ok(travellersService.saveTraveller(traveller));
	}

	@DeleteMapping(value = "/deletetraveller/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deleteTraveller(@PathVariable(value = "id") long id) {
		travellersService.deleteTravellerById(id);
		return ResponseEntity.ok().body("Traveller are deleted");
	}

	@GetMapping("/getallpassenger")
	public ResponseEntity<List<Passenger>> getAllPasssengers() {
		return ResponseEntity.ok(passengersService.getPassengers());
	}

	@GetMapping("/getalltravellerspagination")
	public ResponseEntity<Map<String, Object>> getAllTravellersPagination(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "5") int size) {
		try {
			List<Traveller> travellersList;
			Pageable paging = PageRequest.of(page, size);
			Page<Traveller> page2;
			page2 = travellersService.findAll(paging);

			travellersList = page2.getContent();

			Map<String, Object> map = new HashMap<>();
			map.put("travellers", travellersList);
			map.put("currentPage", page2.getNumber());
			map.put("totalItems", page2.getTotalElements());
			map.put("totalPages", page2.getTotalPages());

			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

	@ResponseBody
	@PostMapping(value = "/savepassenger", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Passenger> savePassenger(@RequestBody Passenger passenger) {
		return ResponseEntity.ok(passengersService.savePassengers(passenger));
	}

	@DeleteMapping(value = "/deletepassenger/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deletePassenger(@PathVariable(value = "id") long id) {
		passengersService.deletePasssengerById(id);
		return ResponseEntity.ok().body("passeneger are deleted");
	}
//
//	@GetMapping("/paymentstatus/{id}/{packprice}")
//	public ResponseEntity<TravellerDto> getPaymentStatus(@PathVariable int id, @PathVariable int packprice) {
//
//		Traveller traveller = travellersService.getTravellerById(id);
//
//		int num = (int) Math.random();
//		if (num > 8) {
//			traveller.setPaymentStatus(false);
//		} else {
//			traveller.setPaymentStatus(true);
//		}
//		traveller.setPackagePrice(packprice);
//		TravellerDto dto = convertor.convertEntityToDto(traveller);
//		return ResponseEntity.ok(travellersService.saveTraveller(dto));
//	}

	@GetMapping("/getallbooked/{email}")
	public ResponseEntity<Optional<Traveller>> getAllBooked(@PathVariable String email) {
		return ResponseEntity.ok(travellersService.findByEmail(email));
	}

}