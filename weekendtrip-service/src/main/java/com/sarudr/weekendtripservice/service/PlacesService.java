package com.sarudr.weekendtripservice.service;

import java.util.List;

import com.sarudr.weekendtripservice.model.Place;

public interface PlacesService {

	Place savePlace(Place place);

	List<Place> getPlaces();

	Place getPlaceById(long packid);

	Place updatePlace(long placeId, Place place);

	Place saveplaceById(long packId, Place place);

	String changeStatus(long placeId);
}