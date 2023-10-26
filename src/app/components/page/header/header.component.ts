import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  
  goinAddCon() {
    this.router.navigate(['/Add-Com']);
    console.log(this.router.url);
    
  }
  
  goMainPage() {
    this.router.navigate(['/page']);
    console.log(this.router.url);
    
  }
}
