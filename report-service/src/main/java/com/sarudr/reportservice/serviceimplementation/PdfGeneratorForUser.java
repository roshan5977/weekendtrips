package com.sarudr.reportservice.serviceimplementation;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.CMYKColor;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.sarudr.travellerservice.model.Passenger;
import com.sarudr.travellerservice.model.Traveller;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PdfGeneratorForUser {

	@Autowired
	private RestTemplate restTemplate;


	
	public void generate(HttpServletResponse response, long travellerId,double amount) throws DocumentException, IOException {

		response.setContentType("application/pdf");
		response.setHeader("Content-Disposition", "inline; filename=Mypdf.pdf");
		Document document = new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		Rectangle rect = new Rectangle(577, 825, 18, 15); // you can resize rectangle
		rect.enableBorderSide(1);
		rect.enableBorderSide(2);
		rect.enableBorderSide(4);
		rect.enableBorderSide(8);
		rect.setBorderColor(BaseColor.BLACK);
		rect.setBorderWidth(1);
		document.add(rect);

		Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
		fontTiltle.setSize(20);

		Paragraph paragraph = new Paragraph("Trip Confirmation Voucher ", fontTiltle);
		paragraph.setAlignment(Paragraph.ALIGN_LEFT);
		document.add(paragraph);
		Image img = Image.getInstance(
				ClassLoader.getSystemResource("weekendtrips-low-resolution-logo-color-on-transparent-background.png"));

		img.scaleAbsolute(146, 70);
		Phrase phrase = new Phrase();
		phrase.add(new Chunk(img, 390, -30));
		document.add(new Paragraph(phrase));

		Font data = FontFactory.getFont(FontFactory.TIMES_ROMAN);
		data.setSize(10);
		document.add(new Paragraph("WeekendTrip Booking ID - 978676" + travellerId, data));
		Traveller traveller =getTravellerById(travellerId);
		System.out.println(traveller);
		System.out.println(traveller.getPurchaseDate());
		document.add(new Paragraph("Booking Date -" + traveller.getPurchaseDate(), data));

		int count = traveller.getPassenger().size();
		document.add(new Paragraph(
				".............................................................................................................................."));
		document.add(new Paragraph("Dear Traveller"));
		document.add(Chunk.NEWLINE);
		document.add(new Paragraph("Your Booking is confirmed."));

		document.add(new Paragraph("Thank you for using WeekendTrip.com for booking your trip"));
		document.add(new Paragraph("For your reference, your WeekendTrip Booking ID is -978676" + travellerId));
		document.add(new Paragraph("The voucher number is -"));
		document.add(new Paragraph(
				"Kindly note, your booking is  and you are not required to contact the hotel or WeekendTrip.com to reconfirm the same."));
		document.add(Chunk.NEWLINE);
		document.add(new Paragraph(
				"If your hotel booking includes a complimentary car transfer, you will need to call the hotel directly to let them know your travel details."));
		document.add(new Paragraph(
				"You will need to carry a printout of this e-mail and present it at the hotel at the time of check-in."));
		document.add(Chunk.NEWLINE);

		document.add(new Paragraph(
				"Please note that you will receive the WeekendTrip Service fee invoice for your booking on the day of checkout on the email ID using which the booking will be made."));
		document.add(Chunk.NEWLINE);

		document.add(new Paragraph("We hope you have a pleasant stay and look forward to assisting you again!"));
		document.add(Chunk.NEWLINE);
		document.add(new Paragraph("Team WeekendTrip.com"));

		document.add(Chunk.NEWLINE);

		Font description = FontFactory.getFont(FontFactory.TIMES_ROMAN);
		description.setSize(10);

		Paragraph paragraph1 = new Paragraph(
				"THIS IS YOUR HOTEL CONFIRMATION VOUCHER. A PRINTED COPY OF THIS MUST BE PRESENTED AT THE HOTEL AT THE TIME OF CHECK-IN.",
				description);
		paragraph1.setAlignment(Paragraph.ALIGN_CENTER);

		document.add(paragraph1);

		document.add(Chunk.NEWLINE);

		document.add(Chunk.NEWLINE);

		List<Passenger> passengersList = traveller.getPassenger();

		long menCount = passengersList.stream().filter(e -> e.getPassengerGender().equalsIgnoreCase("male")).count();
		long womenCount = passengersList.stream().filter(e -> e.getPassengerGender().equalsIgnoreCase("female"))
				.count();
		long childCount = passengersList.stream().filter(e -> e.getPassengerAge() < 5).count();

		document.add(new Paragraph("City: " + traveller.getCityName()));
		document.add(new Paragraph("Package Name: " + traveller.getPackageName()));
		document.add(new Paragraph("Package Price: " + amount));
		document.add(new Paragraph(
				".............................................................................................................................."));

		document.add(new Paragraph("User Email:-" + traveller.getTravellerEmail()));
		document.add(new Paragraph(
				".............................................................................................................................."));

		document.add(new Paragraph("List of Passengers -" + count+"                             "+"Male-"+menCount+"   "+"Female-"+womenCount+"    Child-"+childCount));

		PdfPTable table = new PdfPTable(3);

		table.setWidthPercentage(100f);
		table.setWidths(new int[] { 3, 3, 3 });
		table.setSpacingBefore(3);

		PdfPCell cell = new PdfPCell();
		cell.setBackgroundColor(CMYKColor.WHITE);
		cell.setPadding(4);

		cell.setPhrase(new Phrase("Name"));
		table.addCell(cell);

		cell.setPhrase(new Phrase("Age"));
		table.addCell(cell);

		cell.setPhrase(new Phrase("Gender"));
		table.addCell(cell);

		for (Passenger passenger : passengersList) {
			table.addCell(passenger.getPassengerName());
			table.addCell(String.valueOf(passenger.getPassengerAge()));
			table.addCell(passenger.getPassengerGender());
		}
		document.add(table);
		document.add(new Paragraph(
				".............................................................................................................................."));

		document.close();
	}

	public Traveller getTravellerById(long travellerId) {
		log.info("{}" + travellerId);
		return getAllTraveller().stream().filter(e -> e.getTravellerId() == travellerId).collect(Collectors.toList())
				.get(0);
	}

	public List<Traveller> getAllTraveller() {
		String url = "http://traveller-service/traveller/weekend/getalltravellers";  // Replace with your API endpoint URL

        // Define the response type as a list of Traveller objects
        ParameterizedTypeReference<List<Traveller>> responseType = new ParameterizedTypeReference<List<Traveller>>() {
        };

        // Send the HTTP GET request and receive the response as a ResponseEntity<List<Traveller>>
        ResponseEntity<List<Traveller>> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, responseType);

        // Extract the response body from the ResponseEntity
        List<Traveller> travellers = responseEntity.getBody();
        return travellers;

	}


	public Traveller getPassengerById(long travellerId) {
		log.info("{}" + travellerId);
		return getAllTraveller().stream().filter(e -> e.getTravellerId() == travellerId).collect(Collectors.toList())
				.get(0);
	}

	public List<Passenger> getAllPassengers() {

		 List<Passenger> passengers = restTemplate
				.getForObject("http://traveller-service/traveller/weekend/getallpassenger", List.class);
		log.info("{}" + passengers);
		return passengers;

	}

}
