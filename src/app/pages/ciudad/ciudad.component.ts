import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConeccionApiService } from '../../services/coneccion-api.service';
import { Ciudad } from '../../components/interfaces/ciudad.interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrl: './ciudad.component.css'
})
export class CiudadComponent {
  ciudad!: any
  unResultado :any;
  unaAccion!:string;
  unMensaje!:string;

  constructor(private dataBD: ConeccionApiService,
    private router: Router){
    
  }

  ngOnInit(){
    this.cargarCiudadesBD();
  }

  async cargarCiudadesBD(){
    await this.dataBD.getCiudades()
    .toPromise()
    .then((data:any)=>{
      this.ciudad = data;
      console.log("Ciudades",this.ciudad)
    })
  }

  editarCiudad(unIdCiudad:number) {
    console.log("CIUDAD ESCOGIDA",unIdCiudad);
    this.router.navigate(['/ciudad', unIdCiudad]);
  }

  

  eliminarCiudad(unaCiudad:Ciudad){
      //console.log(this.unaDivision);
      this.dataBD.crud_ciudades(unaCiudad, 'eliminar').subscribe(
        (res: any) => {
          this.unResultado = res;
  
          //console.log(this.unResultado);
          if (this.unResultado.ok == true) {
  
             Swal.fire({
              icon: 'info',
              title: 'Registro eliminado',
              text: 'Ciudad Eliminada',
            });
  
            this.unaAccion = 'Mensaje:';
            this.unMensaje = 'Ciudad Eliminada';
            setTimeout(() => (this.unMensaje = ''), 3000);
  
  
            this.cargarCiudadesBD() ;
  
          } else {
            Swal.fire({
              icon: 'info',
              title: 'Error',
              text: this.unResultado.msg + "Error:" + this.unResultado.error.original.sqlMessage,
            });
      
  
            this.unaAccion = 'Error:';
            this.unMensaje = this.unResultado.msg;
            setTimeout(() => (this.unMensaje = ''), 3000);
          }
        }
        ,(error:any) => {
          console.error(error)
        }
      );
    }
    logout():void{
      localStorage.clear(); // Limpia todo el localStorage
      alert('Has cerrado sesión exitosamente!');
    }


}


