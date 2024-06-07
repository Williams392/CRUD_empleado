package sb.backend.admin.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sb.backend.admin.modelo.Destino;
import sb.backend.admin.servicio.DestinoServicio;
import sb.backend.admin.excepcion.RecursoNoEncontradoExcepcion;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("transporte-app")
@CrossOrigin(value = "http://localhost:4200")
public class DestinoControlador {
    private static final Logger logger = LoggerFactory.getLogger(DestinoControlador.class);

    @Autowired
    private DestinoServicio destinoServicio;

    @GetMapping("/destinos")
    public List<Destino> obtenerDestinos() {
        List<Destino> destinos = this.destinoServicio.listarDestinos();
        logger.info("Destinos obtenidos");
        destinos.forEach(destino -> logger.info(destino.toString()));
        return destinos;
    }

    @PostMapping("/destinos")
    public Destino agregarDestino(@RequestBody Destino destino) {
        logger.info("Destino a agregar " + destino);
        return this.destinoServicio.guardarDestino(destino);
    }

    @GetMapping("/destinos/{id}")
    public ResponseEntity<Destino> obtenerDestinoPorId(@PathVariable int id) {
        Destino destino = this.destinoServicio.buscarDestinoPorId(id);
        if (destino != null)
            return ResponseEntity.ok(destino);
        else
            throw new RecursoNoEncontradoExcepcion("No se encontró el id " + id);
    }

    @PutMapping("/destinos/{id}")
    public ResponseEntity<Destino> actualizarDestino(@PathVariable int id, @RequestBody Destino destinoRecibido) {
        Destino destino = this.destinoServicio.buscarDestinoPorId(id);
        if (destino == null)
            throw new RecursoNoEncontradoExcepcion("No se encontró el id " + id);
        destino.setDestino(destinoRecibido.getDestino());
        destino.setHoraSalida(destinoRecibido.getHoraSalida());
        destino.setDuracion(destinoRecibido.getDuracion());
        destino.setHoraRetorno(destinoRecibido.getHoraRetorno());
        destino.setPrecio(destinoRecibido.getPrecio());
        this.destinoServicio.guardarDestino(destino);
        return ResponseEntity.ok(destino);
    }

    @DeleteMapping("/destinos/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarDestino(@PathVariable int id) {
        Destino destino = destinoServicio.buscarDestinoPorId(id);
        if (destino == null)
            throw new RecursoNoEncontradoExcepcion("No se encontró el id " + id);
        this.destinoServicio.eliminarDestinoPorId(destino.getIdDestino());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
