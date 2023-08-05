package com.sarudr.travellerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sarudr.travellerservice.model.Passenger;


public interface PassengerRepository extends JpaRepository<Passenger, Long>{

}
