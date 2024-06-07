import { Component } from '@angular/core';
import { Chofer } from '../Models/chofer';
import { ChoferService } from '../Services/chofer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chofer-lista',
  templateUrl: './chofer-lista.component.html',
  styleUrl: './chofer-lista.component.css'
})
export class ChoferListaComponent {

  choferes: Chofer[];
  chofer: Chofer = new Chofer();

  constructor(private choferServicio: ChoferService, 
    private enrutador: Router){}

  ngOnInit(){
    this.obenterChoferes();
  }

  obenterChoferes(){
    this.choferServicio.obtenerChoferesLista().subscribe
    (datos => {
      this.choferes = datos
    })
  }
  // ------------------------------------------

  // agregar:
  onSubmit(){
    this.guardarChofer();
  }

  guardarChofer(){
    this.choferServicio.agregarChofer(this.chofer).subscribe(
      {
        next: (datos) => {
          this.obenterChoferes();
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  // Boton eliminar:
  eliminarChofer(id: number){
    this.choferServicio.eliminarChofer(id).subscribe(
      {
        next: (datos) => {
          this.obenterChoferes();
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  editarChofer(id: number){
    this.enrutador.navigate(['editar-chofer', id]);
  }

  cancelar(): void {
    this.chofer = new Chofer(); // Limpiar formulario al cancelar
  }

}


