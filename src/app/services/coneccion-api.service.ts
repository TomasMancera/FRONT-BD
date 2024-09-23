import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_LOCAL } from '../../../config/url-servicios';
import { Persona } from '../components/interfaces/persona.interfaces'
import { Ciudad } from '../components/interfaces/ciudad.interfaces';
import { Usuario } from '../components/interfaces/usuario.interfaces';
import { AuthService } from '../auth/auth-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class ConeccionApiService {

  constructor(public http: HttpClient,public service:AuthService) { 

  }

  getPersonas():any{
    let url = `${URL_LOCAL}/personas`;

    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('Datos',resp)
        return resp.data;

      })
    )

  }

  getUnaPersona(unIdPersona:number): any {
    let url = `${URL_LOCAL}/personas/${unIdPersona}`;


    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('DATOS', resp);
        return resp.data;
      })
    );
  }

  crud_Personas(unaPersona: Persona, unaAccion: string):any {
 
    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();


      let url = `${URL_LOCAL}/personas/${unaPersona.id_persona}`;


      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }


    if (unaAccion === 'insertar') {
     
      //let parametros2 = new HttpParams();
      let url = URL_LOCAL+ '/personas';


      // Begin assigning parameters
      //parametros2 = parametros2.append('nombre',unHeroe.nombre);
      //parametros2 = parametros2.append('bio',unHeroe.bio);
      //parametros2 = parametros2.append('img',unHeroe.img);
      //parametros2 = parametros2.append('aparicion',unHeroe.aparicion);
      //parametros2 = parametros2.append('casa',unHeroe.casa);


      const body = {
        nombres:unaPersona.nombres,
        apellidos:unaPersona.apellidos,
        fecha_nacimiento:unaPersona.fecha_nacimiento,
      };


      return this.http.post(url, body).pipe(map((data) => data));
    }


    if (unaAccion === 'modificar') {
     
      //let parametros = new HttpParams();


      let url = `${URL_LOCAL}/personas/${unaPersona.id_persona}`;


      //let url = URL_SERVICIOS_MONGODB + '/heroes';


      // Begin assigning parameters
      //parametros = parametros.append('nombre',unHeroe.nombre);
      //parametros = parametros.append('bio',unHeroe.bio);
      //parametros = parametros.append('img',unHeroe.img);
      //parametros = parametros.append('aparicion',unHeroe.aparicion);
      //parametros = parametros.append('casa',unHeroe.casa);


      const body = {
        nombres:unaPersona.nombres,
        apellidos:unaPersona.apellidos,
        fecha_nacimiento:unaPersona.fecha_nacimiento,
      };


      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }

  //Ciudades Crud
  getCiudades():any{
    let url = `${URL_LOCAL}/ciudad`;

    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('Datos',resp)
        return resp.data;

      })
    )

  }

  getUnaCiudad(unIdCiudad:number): any {
    let url = `${URL_LOCAL}/ciudad/${unIdCiudad}`;


    return this.http.get(url).pipe(
      map((resp:any) => {
        console.log('DATOS', resp);
        return resp.data;
      })
    );
  }

  crud_ciudades(unaCiudad: Ciudad, unaAccion: string):any {
 
    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();


      let url = `${URL_LOCAL}/ciudad/${unaCiudad.id_ciudad}`;


      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }


    if (unaAccion === 'insertar') {
     
      //let parametros2 = new HttpParams();
      let url = URL_LOCAL+ '/ciudad';


      // Begin assigning parameters
      //parametros2 = parametros2.append('nombre',unHeroe.nombre);
      //parametros2 = parametros2.append('bio',unHeroe.bio);
      //parametros2 = parametros2.append('img',unHeroe.img);
      //parametros2 = parametros2.append('aparicion',unHeroe.aparicion);
      //parametros2 = parametros2.append('casa',unHeroe.casa);


      const body = {
        nombre:unaCiudad.nombre
        
      };


      return this.http.post(url, body).pipe(map((data) => data));
    }


    if (unaAccion === 'modificar') {
     
      //let parametros = new HttpParams();


      let url = `${URL_LOCAL}/ciudad/${unaCiudad.id_ciudad}`;


      //let url = URL_SERVICIOS_MONGODB + '/heroes';


      // Begin assigning parameters
      //parametros = parametros.append('nombre',unHeroe.nombre);
      //parametros = parametros.append('bio',unHeroe.bio);
      //parametros = parametros.append('img',unHeroe.img);
      //parametros = parametros.append('aparicion',unHeroe.aparicion);
      //parametros = parametros.append('casa',unHeroe.casa);


      const body = {
        nombre:unaCiudad.nombre
      };


      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }

  public getUsuarios():any{
    let url = `${URL_LOCAL}/usuarios`;
    const headers_object = new HttpHeaders().set('x-token',this.service.getToken())

    return this.http.get(url,{headers:headers_object}).pipe(
      map((resp:any) => {
        console.log('Datos',resp)
        return resp.data;

      })
    )

  }

  getUnUsuario(unIdUsuario:number): any {
    let url = `${URL_LOCAL}/usuarios/${unIdUsuario}`;
    const headers_object = new HttpHeaders().set('x-token',this.service.getToken())


    return this.http.get(url,{headers:headers_object}).pipe(
      map((resp:any) => {
        console.log('DATOS', resp);
        return resp.data;
      })
    );
  }

  crud_usuarios(unUsuario: Usuario, unaAccion: string):any {
    const headers_object = new HttpHeaders().set('x-token',this.service.getToken())
 
    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();


      let url = `${URL_LOCAL}/usuarios/${unUsuario.id_usuario}`;


      return this.http.delete(url,{headers:headers_object}).pipe(
        map((data) => {
          return data;
        })
      );
    }


    if (unaAccion === 'insertar') {
     
      //let parametros2 = new HttpParams();
      let url = URL_LOCAL+ '/usuarios';


      // Begin assigning parameters
      //parametros2 = parametros2.append('nombre',unHeroe.nombre);
      //parametros2 = parametros2.append('bio',unHeroe.bio);
      //parametros2 = parametros2.append('img',unHeroe.img);
      //parametros2 = parametros2.append('aparicion',unHeroe.aparicion);
      //parametros2 = parametros2.append('casa',unHeroe.casa);


      const body = {
        email:unUsuario.email,
        numero_telefono:unUsuario.numero_telefono,
        minibiografia:unUsuario.minibiografia
      };


      return this.http.post(url, body).pipe(map((data) => data));
    }


    if (unaAccion === 'modificar') {
     
      //let parametros = new HttpParams();


      let url = `${URL_LOCAL}/usuarios/${unUsuario.id_usuario}`;


      //let url = URL_SERVICIOS_MONGODB + '/heroes';


      // Begin assigning parameters
      //parametros = parametros.append('nombre',unHeroe.nombre);
      //parametros = parametros.append('bio',unHeroe.bio);
      //parametros = parametros.append('img',unHeroe.img);
      //parametros = parametros.append('aparicion',unHeroe.aparicion);
      //parametros = parametros.append('casa',unHeroe.casa);


      const body = {
        email:unUsuario.email,
        numero_telefono:unUsuario.numero_telefono,
        minibiografia:unUsuario.minibiografia
      };


      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }



}
