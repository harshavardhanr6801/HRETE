package com.hrms.hrete.leads.dto.response;

import java.time.Instant;
import java.util.UUID;

import com.hrms.hrete.shared.enums.EmployeeCount;

public record LeadResponse(

        UUID id,
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        String designation,
        String companyName,
        EmployeeCount employeeCount,
        String message,
        boolean isActive,
        Instant createdAt,
        Instant updatedAt) {
}
