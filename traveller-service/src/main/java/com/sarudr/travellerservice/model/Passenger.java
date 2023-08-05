package com.sarudr.travellerservice.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "passengers")
public class Passenger {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long passengerId;

	private String passengerName;

	private int passengerAge;

	private String passengerGender;

	private String passengerAadhar;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "refId", referencedColumnName = "travellerId")
	@JsonBackReference
	Traveller traveller;

	public Long getPassengerId() {
		return passengerId;
	}

	public void setPassengerId(Long passengerId) {
		this.passengerId = passengerId;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getPassengerAge() {
		return passengerAge;
	}

	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}

	public String getPassengerGender() {
		return passengerGender;
	}

	public void setPassengerGender(String passengerGender) {
		this.passengerGender = passengerGender;
	}

	public String getPassengerAadhar() {
		return passengerAadhar;
	}

	public void setPassengerAadhar(String passengerAadhar) {
		this.passengerAadhar = passengerAadhar;
	}

	public Traveller getTraveller() {
		return traveller;
	}

	public void setTraveller(Traveller traveller) {
		this.traveller = traveller;
	}

	public Passenger(Long passengerId, String passengerName, int passengerAge, String passengerGender,
			String passengerAadhar, Traveller traveller) {
		super();
		this.passengerId = passengerId;
		this.passengerName = passengerName;
		this.passengerAge = passengerAge;
		this.passengerGender = passengerGender;
		this.passengerAadhar = passengerAadhar;
		this.traveller = traveller;
	}

	public Passenger() {
		super();
	}

}
