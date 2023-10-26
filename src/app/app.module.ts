import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllConveniosComponent } from './components/page/all-convenios/all-convenios.component';
import { AddComComponent } from './components/page/add-com/add-com.component';
import { HeaderComponent } from './components/page/header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/page/all-convenios/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,

    AddComComponent,
    PageNotFoundComponent,
     AllConveniosComponent,
     HeaderComponent,
     ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
