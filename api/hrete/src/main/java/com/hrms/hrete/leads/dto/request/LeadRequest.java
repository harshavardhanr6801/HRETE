package com.hrms.hrete.leads.dto.request;

import com.hrms.hrete.shared.enums.EmployeeCount;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LeadRequest(

        @NotBlank(message = "First name is required")
        String firstName,

        @NotBlank(message = "Last name is required")
        String lastName,

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        String email,

        @NotBlank(message = "Phone number is required")
        String phoneNumber,

        String designation,

        @NotBlank(message = "Company name is required")
        String companyName,

        EmployeeCount employeeCount,

        @Size(max = 2000)
        String message) {
}
