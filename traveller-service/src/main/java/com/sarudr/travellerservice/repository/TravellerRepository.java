package com.sarudr.travellerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.google.common.base.Optional;
import com.sarudr.travellerservice.model.Traveller;

public interface TravellerRepository extends JpaRepository<Traveller, Long> {

	Optional<Traveller> findByTravellerEmail(String travellerEmail);

}
