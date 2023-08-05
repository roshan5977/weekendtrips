package com.sarudr.weekendtripservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sarudr.weekendtripservice.model.Package;
import com.sarudr.weekendtripservice.service.PackagesService;

@CrossOrigin(origins = "*", allowedHeaders = "**")
@RestController
@RequestMapping("/pack")
public class PackagesController {

	@Autowired
	private PackagesService packagesService;

	@GetMapping("/getallpackages")
	public ResponseEntity<List<Package>> getAllPackages() {
		return ResponseEntity.ok(packagesService.getPack());
	}

	@ResponseBody
	@PostMapping(value = "/savepackage", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Package> savePackage(@RequestBody Package pack) {
		return ResponseEntity.ok(packagesService.savePackage(pack));
	}

	@PutMapping(value = "/updatepackage/{packid}")
	public Package updatepackage(@PathVariable(value = "packid") long id, @RequestBody Package pack) {
		return packagesService.updatepack(id, pack);
	}

	@ResponseBody
	@PostMapping(value = "/savepackagebycityid/{cityid}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Package> savePackage(@PathVariable(value = "cityid") long cityId, @RequestBody Package pack) {
		return ResponseEntity.ok(packagesService.savepackageById(cityId, pack));
	}

	@DeleteMapping(value = "/changestatusofpackage/{packId}")
	public ResponseEntity<String> changeStatusOfPack(@PathVariable(value = "packId") long packId) {
		return ResponseEntity.ok(packagesService.changeStatus(packId));
	}

}
