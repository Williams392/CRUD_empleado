// 2-bus:
package sb.backend.admin.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import sb.backend.admin.modelo.Bus;

public interface BusRepositorio extends JpaRepository<Bus, Integer> {
}
