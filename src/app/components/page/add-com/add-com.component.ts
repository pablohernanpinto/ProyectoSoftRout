import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-com',
  templateUrl: './add-com.component.html',
  styleUrls: ['./add-com.component.css']
})
export class AddComComponent {
  convenioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.convenioForm = this.fb.group({
      nombreInstitucion: ['', Validators.required],
      unidadAcademica: ['', Validators.required],
      pais: ['', Validators.required],
      alcance: ['', Validators.required],
      tipoInstitucion: ['', Validators.required],
      nombreConvenio: ['', Validators.required],
      tipoConvenio: ['', Validators.required],
      vigencia: ['', Validators.required],
      anoFirma: ['', Validators.required],
      tipoFirma: ['', Validators.required],
      cupos: ['', Validators.required],
      documentos: ['', Validators.required]
    });
  }

  addConvenio() {
    // Aquí es donde enviarías la información al backend
    const datos = { datosInstitucion: this.convenioForm.value.datosInstitucion, datosConvenio: this.convenioForm.value.datosConvenio };
    // Llamada a tu backend
  }

}
