package com.sarudr.travellerservice.service;

import java.util.List;

import com.sarudr.travellerservice.model.Passenger;

public interface PassengersService {

	Passenger savePassengers(Passenger passsenger);

	List<Passenger> getPassengers();

	String deletePasssengerById(long passengerId);

	Passenger getPassengerById(long travellerId);

}
