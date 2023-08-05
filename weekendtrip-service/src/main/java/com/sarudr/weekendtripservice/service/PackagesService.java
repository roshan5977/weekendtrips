package com.sarudr.weekendtripservice.service;

import java.util.List;
import java.util.Optional;

import com.sarudr.weekendtripservice.model.Package;

public interface PackagesService {

	Package savePackage(Package pack);

	List<Package> getPack();

	Package getPackById(long packId);

	Package updatepack(long packId, Package pack);

	Package savepackageById(long cityId, Package pack);

	String changeStatus(long packId);

	Optional<Package> findbypackName(String packageName);
}
