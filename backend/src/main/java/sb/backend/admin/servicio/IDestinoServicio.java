package sb.backend.admin.servicio;

import sb.backend.admin.modelo.Destino;

import java.util.List;

public interface IDestinoServicio {
    List<Destino> listarDestinos();
    Destino buscarDestinoPorId(Integer idDestino);
    Destino guardarDestino(Destino destino);
    void eliminarDestinoPorId(Integer idDestino);
}
