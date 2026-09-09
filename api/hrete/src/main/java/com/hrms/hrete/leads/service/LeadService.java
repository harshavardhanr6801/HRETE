package com.hrms.hrete.leads.service;

import com.hrms.hrete.leads.dto.request.LeadRequest;
import com.hrms.hrete.leads.dto.response.LeadResponse;

public interface LeadService {

    LeadResponse captureLead(LeadRequest request);

}
