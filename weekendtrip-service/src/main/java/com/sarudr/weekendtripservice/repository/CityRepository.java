package com.sarudr.weekendtripservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sarudr.weekendtripservice.model.City;

public interface CityRepository extends JpaRepository<City, Long> {

}
