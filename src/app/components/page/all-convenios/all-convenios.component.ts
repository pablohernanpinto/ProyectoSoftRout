import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-all-convenios',
  templateUrl: './all-convenios.component.html',
  styleUrls: ['./all-convenios.component.css']
})
export class AllConveniosComponent {
  convenios: any[] = []; // Inicialización aquí

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  openModal() {
    // Utilizando el servicio (opcional)
    // this.modalService.openModal();
  
    // O abrir el modal directamente
    const dialogRef = this.dialog.open(ModalComponent, { });

  }


  ngOnInit() {
    this.hacerPeticion(); 
  }


  hacerPeticion() {
    const url = 'http://localhost:2020/getConvenios';
    this.http.get(url).subscribe((data: any) => {
      this.convenios = data.convenios;
    });
  }







}
