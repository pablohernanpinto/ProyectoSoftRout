import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: {Index: number}) { } // Corregido aquí
 
  convenios: any;
  mostrarEnPantalla: any;

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  ngOnInit() {
    this.hacerPeticion();
  }

  hacerPeticion() {
    const url = 'http://localhost:2020/getConvenios';
    this.http.get(url).subscribe((data: any) => {
      this.convenios = data.convenios;
      // Ahora puedes acceder a this.convenios sin problemas
      this.mostrarEnPantalla = (this.convenios[this.data.Index]);
    });
  }
  
}
