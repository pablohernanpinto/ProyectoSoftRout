import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-com',
  templateUrl: './add-com.component.html',
  styleUrls: ['./add-com.component.css']
})
export class AddComComponent {
  constructor(private router: Router) { }

  formulario = {
    nombreInstitucion: '',
    unidadAcademica: '',
    pais: '',
    alcance: '',
    tipoInstitucion: '',
    nombreConvenio: '',
    tipoConvenio: '',
    vigencia: '',
    anoFirma: '',
    tipoFirma: '',
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

  }
  }




