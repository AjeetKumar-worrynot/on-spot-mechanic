package myproject.Onspotmechanic.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myproject.Onspotmechanic.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
