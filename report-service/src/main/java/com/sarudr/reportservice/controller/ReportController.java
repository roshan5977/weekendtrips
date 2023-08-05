package com.sarudr.reportservice.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.DocumentException;
import com.sarudr.reportservice.serviceimplementation.EmailSenderService;
import com.sarudr.reportservice.serviceimplementation.PdfGeneratorForAdmin;
import com.sarudr.reportservice.serviceimplementation.PdfGeneratorForUser;
import com.sarudr.travellerservice.model.Traveller;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "**",allowedHeaders = "**")
@RestController
@RequestMapping("/weekend")
@Slf4j
public class ReportController {

	@Autowired
	private EmailSenderService senderService;


	@Autowired
	private HttpServletResponse response;

	@Autowired
	private PdfGeneratorForAdmin generator;

	@Autowired
	private PdfGeneratorForUser generatorForUser;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing(){
		return ResponseEntity.ok("working well");
	}

	@GetMapping("/pdf/admin")
	public void generatePdf(HttpServletResponse response) throws DocumentException, IOException {
		response.setContentType("application/pdf");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd:hh:mm:ss");
		String currentDateTime = dateFormat.format(new Date());
		String headerkey = "Content-Disposition";
		String headervalue = "attachment; filename=pdf_" + currentDateTime + ".pdf";
		response.setHeader(headerkey, headervalue);

		generator.generate(response);
	}

	@GetMapping("/pdf/user/{travellerId}/{amount}")
	public void generatePdfForUser(@PathVariable(value = "travellerId") long travellerId,
			@PathVariable(value = "amount") double amount) throws DocumentException, IOException {
log.info("1");
		response.setContentType("application/pdf");

		DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd:hh:mm:ss");
		String currentDateTime = dateFormat.format(new Date());
		String headerkey = "Content-Disposition";
		String headervalue = "attachment; filename=pdf_" + currentDateTime + ".pdf";
		response.setHeader(headerkey, headervalue);
		log.info("2");
		Traveller traveller = generatorForUser.getTravellerById(travellerId);
		log.info("3");
		generatorForUser.generate(response, travellerId, amount);
		try {
			triggerMail(traveller);
		} catch (MessagingException e) {

			e.printStackTrace();
		}

	}

	public void triggerMail(Traveller traveller) throws MessagingException {
		senderService.sendSimpleEmail(traveller.getTravellerEmail(), "Weekendtrips booking confirmation ",
				"This is informed that your booking with mail " + traveller.getTravellerEmail() + " is confirmed ."
						+ "Here are the list of passengers" + traveller.getPassenger());

	}

}