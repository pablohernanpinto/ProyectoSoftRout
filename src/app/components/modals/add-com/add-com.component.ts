import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-com',
  templateUrl: './add-com.component.html',
  styleUrls: ['./add-com.component.css']
})
export class AddComComponent {
  constructor(private router: Router,private http: HttpClient,public dialog: MatDialog) { }


  formulario = {
    nombreInstitucion: '',
    unidadAcademica: '',
    pais: '',
    alcance: '',
    tipoInstitucion: '',
    nombre_conv: '',
    tipo_conv: '',
    vigencia: '',
    ano_firma: '',
    tipo_firma: '',
    cupos: '',
    documentos: '',    

  };
  
  addConvenio(formContact: NgForm) {
    if (formContact.valid) {
      alert("SE A INGRESADO EL CONVENIO");
      console.log(this.formulario);
    } else {
      alert("INGRESO NO VALIDO");
    }
  }

  PaginaPrincipal(){
    this.router.navigate(['/page']);

    this.http.post('http://localhost:3000/api/convenios/', this.formulario).subscribe(
      (data: any) => {console.log(data); // Esto imprimirá la respuesta del servidor en la consola del navegador
      },
      (error) => {
        console.error(error); // Esto imprimirá cualquier error en la consola del navegador
      }
    );
  }

  }
  




