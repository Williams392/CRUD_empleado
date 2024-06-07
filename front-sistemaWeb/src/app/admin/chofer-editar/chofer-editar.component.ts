import { Component } from '@angular/core';
import { Chofer } from '../Models/chofer';
import { ChoferService } from '../Services/chofer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chofer-editar',
  templateUrl: './chofer-editar.component.html',
  styleUrl: './chofer-editar.component.css'
})
export class ChoferEditarComponent {

  chofer: Chofer = new Chofer();
  id: number;

  // llamos al id:
  constructor(private choferServicio: ChoferService, 
    private ruta: ActivatedRoute, 
    private enrutador: Router) {}
    
    ngOnInit(){
      this.id = this.ruta.snapshot.params['id'];
      this.choferServicio.obtenerChoferId(this.id).subscribe(
        {
          next: (datos) => this.chofer = datos,
          error: (err) => console.log(err)
        }  
      );
    }

    onSubmit(){
      this.guardarChofer(); 
    }
  
    guardarChofer(){
      this.choferServicio.editarChofer(this.id, this.chofer).subscribe(
        {
          next: (datos) => this.irChoferLista(),
          error: (errores) => console.log(errores)
        }
      )
    }

    irChoferLista(){
      this.enrutador.navigate(['/chofer']);
    }
  

}
