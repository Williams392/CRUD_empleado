// 1-bus:
package sb.backend.admin.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idBus;

    private String nombreBus;
    private String nroPlaca;
    private Integer cantidadAsientos;

    @ManyToOne
    @JoinColumn(name = "idChofer")
    private Chofer chofer;
}
