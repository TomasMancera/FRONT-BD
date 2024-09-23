import { Component } from '@angular/core';
import { Ciudad } from '../interfaces/ciudad.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ConeccionApiService } from '../../services/coneccion-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-ciudad',
  templateUrl: './add-edit-ciudad.component.html',
  styleUrl: './add-edit-ciudad.component.css'
})
export class AddEditCiudadComponent {
  unaCiudad_id!: number;
  unaCiudad: Ciudad ={
    id_ciudad:-1,
    nombre:''
  };
  unResultado: any;
  unaAccion!: string;
  unMensaje!: string;
  
  constructor(
    private router: Router,
    private parametros: ActivatedRoute,
    private dataBD: ConeccionApiService,
  ) {
 
    this.parametros.params.subscribe((params) => {
      this.unaCiudad_id = params['id'];
 
      console.log("CIUDAD",this.unaCiudad_id);
 
      if (this.unaCiudad_id != -1){
        this.cargarCiudadesBD()
      }
    });
  }
 
    async cargarCiudadesBD() {
    await this.dataBD
      .getUnaCiudad(this.unaCiudad_id)
      .toPromise()
      .then((data: any) => {
        this.unaCiudad= data;
        console.log(this.unaCiudad)
      });
  }

  guardar(){
    console.log("llamo a Guardar")
 
    if (this.unaCiudad_id == -1) {
      this.nuevaCiudad();
    } else {
      this.actualizarCiudad();
    }
  }
 
 
  actualizarCiudad() {
    //console.log(this.unaDivision);
    this.dataBD.crud_ciudades(this.unaCiudad, 'modificar').subscribe(
      (res: any) => {
        this.unResultado = res;
 
 
        console.log('RESULTADO_ACTUALIZAR', this.unResultado);
 
 
        if (this.unResultado.ok == true) {
          console.log(this.unResultado);
          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Registro de Ciudad Actualizado...';
          setTimeout(() => (this.unMensaje = ''), 3000);
 
 
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unMensaje,
          });
 
 
          this.router.navigate(['/ciudad']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.error.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
 
 
  async nuevaCiudad() {
    await this.dataBD.crud_ciudades(this.unaCiudad, 'insertar').subscribe(
      (res: any) => {
        this.unResultado = res;
 
 
        console.log('RESULTADO_NUEVO', this.unResultado);
 
 
        if (this.unResultado.ok == true) {
          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Ciudad Insertada';
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unMensaje,
          });
 
 
          setTimeout(() => (this.unMensaje = ''), 3000);
 
 
          this.router.navigate(['/ciudad']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
 
}





