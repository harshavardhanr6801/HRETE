package com.hrms.hrete.leads.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrete.leads.entity.Lead;

public interface LeadRepository extends JpaRepository<Lead, UUID> {
}
