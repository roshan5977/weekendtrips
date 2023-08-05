package com.sarudr.weekendtripservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sarudr.weekendtripservice.model.Package;

public interface PackageRepository extends JpaRepository<Package, Long> {

	Optional<Package> findByPackageName(String packageName);

}
