package com.sarudr.travellerservice.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarudr.travellerservice.model.Passenger;
import com.sarudr.travellerservice.repository.PassengerRepository;
import com.sarudr.travellerservice.service.PassengersService;

@Service
public class PassengersServiceImplementation implements PassengersService {

	@Autowired(required = true)
	PassengerRepository passengerRepository;

	@Override
	public Passenger savePassengers(Passenger passenger) {

		return passengerRepository.save(passenger);
	}

	@Override
	public List<Passenger> getPassengers() {
		return passengerRepository.findAll();
	}

	@Override
	public String deletePasssengerById(long passengerId) {
		passengerRepository.deleteById(passengerId);
		return "passengers deleted " + passengerId;
	}

	@Override
	public Passenger getPassengerById(long passengerId) {
		return passengerRepository.findById(passengerId).orElse(null);
	}

}
