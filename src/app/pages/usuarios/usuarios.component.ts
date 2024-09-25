import { Component } from '@angular/core';
import { ConeccionApiService } from '../../services/coneccion-api.service';
import { Usuario } from '../../components/interfaces/usuario.interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios!: any
  unResultado :any;
  unaAccion!:string;
  unMensaje!:string;

  constructor(private dataBD: ConeccionApiService,
    private router: Router){
    
  }

  ngOnInit(){
    this.cargarUsuariosBD();
  }

  async cargarUsuariosBD(){
    await this.dataBD.getUsuarios()
    .toPromise()
    .then((data:any)=>{
      this.usuarios = data;
      console.log("Usuarios",this.usuarios)
    })
  }

  editarUsuario(unIdUsuario:number) {
    console.log("USUARIO ESCOGIDO",unIdUsuario);
    this.router.navigate(['/usuarios', unIdUsuario]);
  }

  

  eliminarUsuario(unUsuario:Usuario){
      //console.log(this.unaDivision);
      this.dataBD.crud_usuarios(unUsuario, 'eliminar').subscribe(
        (res: any) => {
          this.unResultado = res;
  
          //console.log(this.unResultado);
          if (this.unResultado.ok == true) {
  
             Swal.fire({
              icon: 'info',
              title: 'Registro eliminado',
              text: 'Usuario Eliminado',
            });
  
            this.unaAccion = 'Mensaje:';
            this.unMensaje = 'Usuario Eliminado';
            setTimeout(() => (this.unMensaje = ''), 3000);
  
  
            this.cargarUsuariosBD() ;
  
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


