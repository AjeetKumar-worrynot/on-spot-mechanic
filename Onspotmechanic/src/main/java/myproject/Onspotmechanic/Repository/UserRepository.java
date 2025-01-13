package myproject.Onspotmechanic.Repository;

import myproject.Onspotmechanic.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
