import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
// {path: '', redirectTo: '/accueil', pathMatch: 'full' },
{path: 'accueil', component: AccueilComponent },
{path: 'admin', component: AdminComponent },
{path: 'ecoles', component: EcolesComponent },
{path: 'panier', component: PanierComponent },
{path: 'search', component: SearchComponent },
{path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
