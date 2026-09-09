package com.hrms.hrete.leads.entity;

import com.hrms.hrete.shared.entity.BaseAuditingEntity;
import com.hrms.hrete.shared.enums.EmployeeCount;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "leads")
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Lead extends BaseAuditingEntity {

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    private String designation;

    @Column(nullable = false)
    private String companyName;

    @Enumerated(EnumType.STRING)
    private EmployeeCount employeeCount;

    @Column(length = 2000)
    private String message;
}
