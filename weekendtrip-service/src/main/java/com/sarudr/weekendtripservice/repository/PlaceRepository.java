package com.sarudr.weekendtripservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sarudr.weekendtripservice.model.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {

}
