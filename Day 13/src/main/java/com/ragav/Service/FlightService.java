package com.ragav.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ragav.Entity.Flight;
import com.ragav.Repository.FlightRepository;




@Service
public class FlightService {

	@Autowired
	FlightRepository flightRepository;
	
	public List<Flight> getAllFlight() {
		return flightRepository.findAll();
	}
	
	public Flight getflightById(Long flightId) {
		Optional<Flight> flightOptional = flightRepository.findById(flightId);
		return flightOptional.orElse(null);
	}
	
	public Flight saveflight(Flight flight) {
		return flightRepository.save(flight);
	}
	
	public void deleteflight(Long flightId) {
		flightRepository.deleteById(flightId);
	}
}