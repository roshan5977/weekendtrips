package com.sarudr.weekendtripservice.service;

import java.util.List;

import com.sarudr.weekendtripservice.model.City;

public interface CityService {

	City getById(long cityId);

	String changeStatus(long cityId);

	City saveCity(City city);

	City updateCity(long cityId, City city);

	List<City> getAllCities();
}
