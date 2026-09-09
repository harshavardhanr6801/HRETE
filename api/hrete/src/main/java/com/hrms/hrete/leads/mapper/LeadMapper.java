package com.hrms.hrete.leads.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.hrms.hrete.leads.dto.request.LeadRequest;
import com.hrms.hrete.leads.dto.response.LeadResponse;
import com.hrms.hrete.leads.entity.Lead;

@Mapper(componentModel = "spring")
public interface LeadMapper {

    Lead toEntity(LeadRequest request);

    LeadResponse toResponse(Lead lead);

    void updateEntityFromRequest(LeadRequest request, @MappingTarget Lead lead);
}
