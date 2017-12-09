package com.smart_museum.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.smart_museum.entity.Evidence;
import com.smart_museum.service.IEvidenceService;

@Controller
@RequestMapping("user")
public class EvidenceController {
	@Autowired
	private IEvidenceService evidenceService;
	@GetMapping("evidence/{id}")
	public ResponseEntity<Evidence> getEvidenceById(@PathVariable("id") Integer id) {
		Evidence evidence = evidenceService.getEvidenceById(id);
		return new ResponseEntity<Evidence>(evidence, HttpStatus.OK);
	}
	@GetMapping("evidences")
	public ResponseEntity<List<Evidence>> getAllEvidences() {
		List<Evidence> list = evidenceService.getAllEvidences();
		return new ResponseEntity<List<Evidence>>(list, HttpStatus.OK);
	}
	@PostMapping("evidence")
	public ResponseEntity<Void> addEvidence(@RequestBody Evidence evidence, UriComponentsBuilder builder) {
        boolean flag = evidenceService.addEvidence(evidence);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/evidence/{id}").buildAndExpand(evidence.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("evidence")
	public ResponseEntity<Evidence> updateEvidence(@RequestBody Evidence evidence) {
		evidenceService.updateEvidence(evidence);
		return new ResponseEntity<Evidence>(evidence, HttpStatus.OK);
	}
	@DeleteMapping("evidence/{id}")
	public ResponseEntity<Void> deleteEvidence(@PathVariable("id") Integer id) {
		evidenceService.deleteEvidence(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
} 
