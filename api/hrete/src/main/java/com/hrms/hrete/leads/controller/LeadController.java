package com.hrms.hrete.leads.controller;

import com.hrms.hrete.leads.dto.request.LeadRequest;
import com.hrms.hrete.leads.dto.response.LeadResponse;
import com.hrms.hrete.leads.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @PostMapping("/lead_capture")
    public ResponseEntity<LeadResponse> captureLead (@RequestBody @Valid LeadRequest leadRequest){
        LeadResponse leadCretead = leadService.captureLead(leadRequest);
        return  ResponseEntity.status(HttpStatus.CREATED).body(leadCretead);
    }

}
