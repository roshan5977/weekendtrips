package com.sarudr.weekendtripservice.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarudr.weekendtripservice.model.Package;
import com.sarudr.weekendtripservice.model.Place;
import com.sarudr.weekendtripservice.repository.PackageRepository;
import com.sarudr.weekendtripservice.repository.PlaceRepository;
import com.sarudr.weekendtripservice.service.PlacesService;

@Service
public class PlacesServiceImplementation implements PlacesService {

	@Autowired(required = true)
	PackageRepository packageRepository;

	@Autowired(required = true)
	PlaceRepository placeRepository;

	@Override
	public Place savePlace(Place place) {
		List<Package> packageList = packageRepository.findAll();
		for (Package pack : packageList) {
			if (pack.getPackageId().equals(place.getPackages().getPackageId())) {
				place.setPackages(pack);
			}
		}
		return placeRepository.save(place);
	}

	@Override
	public List<Place> getPlaces() {
		return placeRepository.findAll();
	}

	@Override
	public Place getPlaceById(long placeId) {
		return placeRepository.findById(placeId).orElse(null);
	}

	@Override
	public Place updatePlace(long placeId, Place place) {
		place.setPlaceId(placeId);
		return placeRepository.save(place);
	}

	@Override
	public Place saveplaceById(long packId, Place place) {
		List<Package> packageList = packageRepository.findAll();
		for (Package pack : packageList) {
			if (pack.getPackageId().equals(packId)) {
				place.setPackages(pack);
			}
		}
		return placeRepository.save(place);
	}

	@Override
	public String changeStatus(long placeId) {
		List<Place> placeList = placeRepository.findAll();
		String active = "Active";
		String inActive = "InActive";

		updatePlaceStatus(placeId, placeList, active, inActive);

		return "Status changed " + placeId;
	}

	private void updatePlaceStatus(long placeId, List<Place> placeList, String active, String inActive) {
		for (Place place : placeList) {
			if (place.getPlaceId().equals(placeId)) {
				if (place.getPlaceStatus().equalsIgnoreCase(inActive)) {
					place.setPlaceStatus(active);
				} else if (place.getPlaceStatus().equalsIgnoreCase(active)) {
					place.setPlaceStatus(inActive);
				}
				placeRepository.save(place);
			}
		}
	}

}
