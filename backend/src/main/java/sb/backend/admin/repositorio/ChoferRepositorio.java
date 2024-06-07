package sb.backend.admin.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import sb.backend.admin.modelo.Chofer;

public interface ChoferRepositorio extends JpaRepository<Chofer, Integer> {
}
