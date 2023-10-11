package com.ragav.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ragav.Entity.Flight;
import com.ragav.Repository.FlightRepository;



@CrossOrigin("*")
@RestController
@RequestMapping("/Flight")
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;
    @GetMapping(value="/get")
    public Iterable<Flight> getAllFlight(){
        return flightRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public Flight createtata(@RequestBody Flight ad) {
        return flightRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Flight>> getById(@PathVariable  Long id){
        Optional<Flight> ac = flightRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public Flight updateFlightDetails(@RequestBody Flight b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return flightRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	flightRepository.deleteById(id);
		return null;
	}
}