import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{path: '', redirectTo: '/accueil', pathMatch: 'full' },
{path: 'app-accueil', component: AccueilComponent },
{path: 'app-admin', component: AdminComponent },
{path: 'app-ecoles', component: EcolesComponent },
{path: 'app-panier', component: PanierComponent },
{path: 'app-search', component: SearchComponent},
{path: 'inscription', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
