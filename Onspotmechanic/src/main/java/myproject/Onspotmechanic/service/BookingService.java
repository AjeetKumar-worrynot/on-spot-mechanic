package myproject.Onspotmechanic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import myproject.Onspotmechanic.Repository.BookingRepository;
import myproject.Onspotmechanic.model.Booking;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public void bookService(Booking booking) {
        bookingRepository.save(booking);
    }
}
