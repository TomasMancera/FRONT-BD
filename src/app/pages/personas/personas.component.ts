import { Component } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { ConeccionApiService } from '../../services/coneccion-api.service';
import { Router } from '@angular/router';
import { Persona } from '../../components/interfaces/persona.interfaces'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  personas!: any
  unResultado :any;
  unaAccion!:string;
  unMensaje!:string;

  constructor(private dataBD: ConeccionApiService,
    private router: Router){
    
  }

  ngOnInit(){
    this.cargarPersonasBD();
  }

  async cargarPersonasBD(){
    await this.dataBD.getPersonas()
    .toPromise()
    .then((data:any)=>{
      this.personas = data;
      console.log("Personas",this.personas)
    })
  }

  editarPersona(unIdPersona:number) {
    console.log("PERSONA ESCOGIDA",unIdPersona);
    this.router.navigate(['/persona', unIdPersona]);
  }

  

  eliminarPersona(unaPersona:Persona){
      //console.log(this.unaDivision);
      this.dataBD.crud_Personas(unaPersona, 'eliminar').subscribe(
        (res: any) => {
          this.unResultado = res;
  
          //console.log(this.unResultado);
          if (this.unResultado.ok == true) {
  
             Swal.fire({
              icon: 'info',
              title: 'Registro eliminado',
              text: 'Persona Eliminada',
            });
  
            this.unaAccion = 'Mensaje:';
            this.unMensaje = 'Persona Eliminada';
            setTimeout(() => (this.unMensaje = ''), 3000);
  
  
            this.cargarPersonasBD() ;
  
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