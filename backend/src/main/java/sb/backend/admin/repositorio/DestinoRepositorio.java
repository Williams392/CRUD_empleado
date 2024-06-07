package sb.backend.admin.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import sb.backend.admin.modelo.Destino;


public interface DestinoRepositorio extends JpaRepository<Destino, Integer> {
}
