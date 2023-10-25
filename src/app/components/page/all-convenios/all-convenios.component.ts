import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-convenios',
  templateUrl: './all-convenios.component.html',
  styleUrls: ['./all-convenios.component.css']
})
export class AllConveniosComponent {
  convenios: any[] = []; // Inicialización aquí

  constructor(private http: HttpClient) { }

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
