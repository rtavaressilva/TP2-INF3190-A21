import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { AdminComponent } from './admin/admin.component';
import { BdService } from './bd.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SearchComponent,
    PanierComponent,
    SignupComponent,
    EcolesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
