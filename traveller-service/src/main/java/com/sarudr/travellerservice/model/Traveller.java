package com.sarudr.travellerservice.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Data
@Entity
@Table(name = "traveller")
@NamedQuery(name = "Traveller.findByPurchaseDate", query = "select u from Traveller u where u.purchaseDate = ?1")
@NamedQuery(name = "Traveller.findByCityName", query = "select u from Traveller u where u.cityName = ?1")
@NamedQuery(name = "Traveller.findByPackageName", query = "select u from Traveller u where u.packageName = ?1")
public class Traveller {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long travellerId;

	private String travellerEmail;

	private Date journeyStartingDate;

	private Date journeyEndingDate;

	private String packageName;

	private double packagePrice;

	private Date purchaseDate;

	private boolean paymentStatus;

	private String cityName;

	@OneToMany(mappedBy = "traveller", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference
	List<Passenger> passenger;

}