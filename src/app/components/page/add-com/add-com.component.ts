import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-com',
  templateUrl: './add-com.component.html',
  styleUrls: ['./add-com.component.css']
})
export class AddComComponent {


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
  }




