package com.hrms.hrete;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HreteApplication {

	public static void main(String[] args) {
		SpringApplication.run(HreteApplication.class, args);
	}

}
