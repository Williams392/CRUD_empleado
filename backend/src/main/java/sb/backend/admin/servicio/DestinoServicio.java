package sb.backend.admin.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sb.backend.admin.modelo.Destino;
import sb.backend.admin.repositorio.DestinoRepositorio;

import java.util.List;

@Service
public class DestinoServicio implements IDestinoServicio {

    @Autowired
    private DestinoRepositorio destinoRepositorio;

    @Override
    public List<Destino> listarDestinos() {
        return this.destinoRepositorio.findAll();
    }

    @Override
    public Destino buscarDestinoPorId(Integer idDestino) {
        return this.destinoRepositorio.findById(idDestino).orElse(null);
    }

    @Override
    public Destino guardarDestino(Destino destino) {
        return this.destinoRepositorio.save(destino);
    }

    @Override
    public void eliminarDestinoPorId(Integer idDestino) {
        this.destinoRepositorio.deleteById(idDestino);
    }
}
