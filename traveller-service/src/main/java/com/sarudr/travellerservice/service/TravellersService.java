package com.sarudr.travellerservice.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.google.common.base.Optional;
import com.sarudr.travellerservice.model.Traveller;

public interface TravellersService {

	Traveller saveTraveller(Traveller traveller);

	List<Traveller> getTraveller();

	String deleteTravellerById(long travellerId);

	Traveller getTravellerById(long travellerId);

	Page<Traveller> findAll(Pageable paging);

	Optional<Traveller> findByEmail(String email);

}
