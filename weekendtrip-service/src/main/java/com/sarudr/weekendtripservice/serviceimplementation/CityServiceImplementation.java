package com.sarudr.weekendtripservice.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarudr.weekendtripservice.model.City;
import com.sarudr.weekendtripservice.model.Package;
import com.sarudr.weekendtripservice.model.Place;
import com.sarudr.weekendtripservice.repository.CityRepository;
import com.sarudr.weekendtripservice.repository.PackageRepository;
import com.sarudr.weekendtripservice.repository.PlaceRepository;
import com.sarudr.weekendtripservice.service.CityService;

@Service
public class CityServiceImplementation implements CityService {

	@Autowired(required = true)
	CityRepository cityRepository;

	@Autowired(required = true)
	PackageRepository packageRepository;

	@Autowired(required = true)
	PlaceRepository placeRepository;

	@Override
	public City saveCity(City city) {
		return cityRepository.save(city);
	}

	@Override
	public List<City> getAllCities() {
		return cityRepository.findAll();
	}

	@Override
	public City getById(long cityId) {
		return cityRepository.findById(cityId).orElse(null);
	}

	@Override
	public City updateCity(long cityId, City city) {
		city.setCityId(cityId);
		city = cityRepository.save(city);
		return city;
	}

	@Override
	public String changeStatus(long cityId) {
		List<City> cityList = cityRepository.findAll();
		List<Package> packageList = packageRepository.findAll();
		List<Place> placesList = placeRepository.findAll();

		String active = "Active";
		String inActive = "InActive";

		updateCityStatus(cityId, cityList, active, inActive);
		updatePackageStatus(cityId, packageList, active, inActive);
		updatePlaceStatus(cityId, placesList, active, inActive);

		return "Status is changed";
	}

	private void updateCityStatus(long cityId, List<City> cityList, String active, String inActive) {
		for (City city : cityList) {
			if (city.getCityId().equals(cityId) && city.getStatus().equalsIgnoreCase(inActive)) {
				city.setStatus(active);
			} else if (city.getCityId().equals(cityId) && city.getStatus().equalsIgnoreCase(active)) {
				city.setStatus(inActive);
			}
			cityRepository.save(city);
		}
	}

	private void updatePackageStatus(long cityId, List<Package> packageList, String active, String inActive) {
		for (Package pack : packageList) {
			if (pack.getCity().getCityId().equals(cityId) && pack.getCity().getStatus().equalsIgnoreCase(inActive)) {
				pack.setPackageStatus(inActive);
			} else if (pack.getCity().getCityId().equals(cityId)
					&& pack.getCity().getStatus().equalsIgnoreCase(active)) {
				pack.setPackageStatus(active);
			}
			packageRepository.save(pack);
		}
	}

	private void updatePlaceStatus(long cityId, List<Place> placesList, String active, String inActive) {
		for (Place place : placesList) {
			if (place.getPackages().getCity().getCityId().equals(cityId)
					&& place.getPackages().getPackageStatus().equalsIgnoreCase(inActive)) {
				place.setPlaceStatus(inActive);
			} else if (place.getPackages().getCity().getCityId().equals(cityId)
					&& place.getPackages().getPackageStatus().equalsIgnoreCase(active)) {
				place.setPlaceStatus(active);
			}
			placeRepository.save(place);
		}
	}

}
