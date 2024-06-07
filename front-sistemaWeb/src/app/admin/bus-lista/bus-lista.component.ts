import { Component } from '@angular/core';
import { Bus } from '../Models/bus';
import { BusService } from '../Services/bus.service';
import { Chofer } from '../Models/chofer';
import { ChoferService } from '../Services/chofer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-lista',
  templateUrl: './bus-lista.component.html',
  styleUrl: './bus-lista.component.css'
})
export class BusListaComponent {

  buses: Bus[];
  bus: Bus = new Bus();
  choferes: Chofer[]; // para obtener la lista de choferes

  constructor(private busServicio: BusService, private choferServicio: ChoferService, private enrutador: Router){}

  ngOnInit(){
    this.obtenerBuses();
    this.obtenerChoferes();
  }

  obtenerBuses(){
    this.busServicio.obtenerBusesLista().subscribe
    (datos => {
      this.buses = datos
    })
  }

  obtenerChoferes(){
    this.choferServicio.obtenerChoferesLista().subscribe
    (datos => {
      this.choferes = datos
    })
  }
  // ------------------------------------------

  onSubmit(){
    this.guardarBus();
  }

  guardarBus(){
    this.busServicio.agregarBus(this.bus).subscribe(
      {
        next: (datos) => {
          this.obtenerBuses();
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  // Boton elimianar:
  eliminarBus(id: number){
    this.busServicio.eliminarBus(id).subscribe(
      {
        next: (datos) => this.obtenerBuses(),
        error: (errores) => console.log(errores)
      }
    );
  }

  editarBus(id: number){
    this.enrutador.navigate(['editar-bus', id]);
  }

  cancelar(): void {
    this.bus = new Bus(); // Limpiar formulario al cancelar
  }

}



