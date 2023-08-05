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

import com.sarudr.weekendtripservice.controller.PackagesController;
import com.sarudr.weekendtripservice.model.Package;
import com.sarudr.weekendtripservice.service.PackagesService;

@SpringBootTest
class PackageControllerTest {
	@Mock
	private PackagesService packagesService;

	@InjectMocks
	private PackagesController controller;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testSavePackage() {
		Package packagePojo = new Package();
		Package savePack = new Package();

		when(packagesService.savePackage(savePack)).thenReturn(savePack);

		ResponseEntity<Package> entity = controller.savePackage(savePack);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		assertEquals(savePack, entity.getBody());

		verify(packagesService, times(1)).savePackage(packagePojo);
		verifyNoMoreInteractions(packagesService);

	}

	@Test
	void testGetAllPackages() {

		List<Package> packages = new ArrayList<>();

		when(packagesService.getPack()).thenReturn(packages);

		ResponseEntity<List<Package>> response = controller.getAllPackages();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(packages, response.getBody());

		verify(packagesService, times(1)).getPack();
		verifyNoMoreInteractions(packagesService);
	}

	@Test
	void testUpdatePack() {
		Package packagePojo = new Package();
		Package updatePack = new Package();

		when(packagesService.updatepack(1, packagePojo)).thenReturn(updatePack);

		Package result = controller.updatepackage(1, updatePack);

		assertEquals(updatePack, result);

		verify(packagesService, times(1)).updatepack(1, updatePack);
		verifyNoMoreInteractions(packagesService);
	}

	@Test
	void changeStatusOfPack() {

		String val = null;

		when(packagesService.changeStatus(1)).thenReturn(val);

		ResponseEntity<String> entity = controller.changeStatusOfPack(1);

		assertEquals(HttpStatus.OK, entity.getStatusCode());

		assertEquals(val, entity.getBody());

		verify(packagesService, times(1)).changeStatus(1);
	}
}
