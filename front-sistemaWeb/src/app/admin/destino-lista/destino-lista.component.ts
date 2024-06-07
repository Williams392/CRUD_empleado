import { Component } from '@angular/core';
import { ChoferService } from '../Services/chofer.service';
import { Router } from '@angular/router';
import { Destino } from '../Models/destino.ts';
import { DestinoService } from '../Services/destino.service';

@Component({
  selector: 'app-destino-lista',
  templateUrl: './destino-lista.component.html',
  styleUrl: './destino-lista.component.css'
})
export class DestinoListaComponent {

  destinos: Destino[];
  destin: Destino = new Destino();

  constructor(private destinoServicio: DestinoService, 
    private enrutador: Router){}

    ngOnInit(){
      this.ObtenerDestinos();
    }

    ObtenerDestinos(){
      this.destinoServicio.obtenerDestinoLista().subscribe
      (datos => {
        this.destinos = datos
      })
    }

    // agregar:
    onSubmit(){
      this.guardarDestino();
    }

    guardarDestino(){
      this.destinoServicio.agregarDestino(this.destin).subscribe(
        {
          next: () => {
            this.enrutador.navigate(['/destinos']);
          },
          error: (err) => {
            console.log(err);
          }
        }
      )
    }

    // Boton eliminar:
    eliminarDestino(id: number){
      this.destinoServicio.eliminarDestino(id).subscribe(
        {
          next: (datos) => {
            this.ObtenerDestinos();
          },
          error: (err) => {
            console.log(err);
          }
        }
      )
    }

    editarDestino(id: number){
      this.enrutador.navigate(['editar-destino', id]);
    }

    cancelar(): void {
      this.destin = new Destino(); // Limpiar formulario al cancelar
    }

}
