import { Component } from '@angular/core';
import { Bus } from '../Models/bus';
import { BusService } from '../Services/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chofer } from '../Models/chofer';
import { ChoferService } from '../Services/chofer.service';

@Component({
  selector: 'app-bus-editar',
  templateUrl: './bus-editar.component.html',
  styleUrl: './bus-editar.component.css'
})
export class BusEditarComponent {

  bus: Bus = new Bus(); 
  id: number;
  choferes: Chofer[];

  constructor(private busServicio: BusService, private choferServicio: ChoferService,
    private ruta: ActivatedRoute,
    private enrutador: Router) {}
  
    ngOnInit(){
      this.obtenerChoferes();
      this.id = this.ruta.snapshot.params['id'];
      this.busServicio.obtenerBusId(this.id).subscribe(
        {
          next: (datos) => this.bus = datos,
          error: (err) => console.log(err)
        }
      )
    }

    obtenerChoferes(){
      this.choferServicio.obtenerChoferesLista().subscribe
      (datos => {
        this.choferes = datos
      })
    }

    onSubmit(){
      this.guardarBus(); 
    }
    
    guardarBus(){
      this.busServicio.editarBus(this.id, this.bus).subscribe(
        {
          next: (datos) => this.irBusLista(),
          error: (err) => console.log(err)
        }
      )
    }

    irBusLista(){
      this.enrutador.navigate(['/buses']);
    }

}

