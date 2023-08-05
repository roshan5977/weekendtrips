package com.sarudr.weekendtripservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.sarudr.weekendtripservice.controller.CityController;
import com.sarudr.weekendtripservice.model.City;
import com.sarudr.weekendtripservice.service.CityService;

@SpringBootTest
class CityControllerTest {

	@Mock
	private CityService cityService;

	@InjectMocks
	private CityController cityController;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testSaveCity() {
		City cityPojo = new City();

		City savedCity = new City();

		when(cityService.saveCity(cityPojo)).thenReturn(savedCity);

		ResponseEntity<City> response = cityController.saveCity(cityPojo);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(savedCity, response.getBody());

		verify(cityService, times(1)).saveCity(cityPojo);
		verifyNoMoreInteractions(cityService);
	}

	@Test
	void testGetAllCities() {

		List<City> cities = new ArrayList<>();

		when(cityService.getAllCities()).thenReturn(cities);

		ResponseEntity<List<City>> response = cityController.getAllCities();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(cities, response.getBody());

		verify(cityService, times(1)).getAllCities();
		verifyNoMoreInteractions(cityService);
	}

	@Test
	void testUpdateCity() {

		City cityPojo = new City();

		City updatedCity = new City();

		when(cityService.updateCity(1, cityPojo)).thenReturn(updatedCity);

		City result = cityController.updatecity(1, updatedCity);

		assertEquals(updatedCity, result);

		verify(cityService, times(1)).updateCity(1, cityPojo);
		verifyNoMoreInteractions(cityService);
	}

	@Test
	void changeStatusOfCity() {

		String val = null;

		when(cityService.changeStatus(1)).thenReturn(val);

		ResponseEntity<City> entity = cityController.changeStatusOfCity(1);

		assertEquals(HttpStatus.OK, entity.getStatusCode());

		verify(cityService, times(1)).changeStatus(1);
	}
}
