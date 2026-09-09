package com.hrms.hrete.leads.service.impl;

import com.hrms.hrete.leads.dto.request.LeadRequest;
import com.hrms.hrete.leads.dto.response.LeadResponse;
import com.hrms.hrete.leads.entity.Lead;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.hrms.hrete.leads.mapper.LeadMapper;
import com.hrms.hrete.leads.repository.LeadRepository;
import com.hrms.hrete.leads.service.LeadService;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
public class LeadServiceImpl implements LeadService{

    private final LeadRepository leadRepository;
    private final LeadMapper leadMapper;


    public LeadServiceImpl(LeadRepository leadRepository, LeadMapper leadMapper) {
        this.leadRepository = leadRepository;
        this.leadMapper = leadMapper;
    }


    @Override
    @Transactional
    public LeadResponse captureLead(LeadRequest request) {

        Lead lead = leadMapper.toEntity(request);
        Lead captureLead = leadRepository.save(lead);
        log.info("Lead captured successfully");
        return leadMapper.toResponse(captureLead);
    }
}
