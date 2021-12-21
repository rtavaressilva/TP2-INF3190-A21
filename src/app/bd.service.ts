import { Injectable } from '@angular/core';
import * as listeLivres from '../assets/data/livres.json';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  livres:any = (listeLivres as any);
  lstLivres:any = [];
  lstPanier:any = [];

  constructor(private http: HttpClient) {
    
  }

updateLivres() {
  return this.livres; //TODO: replace by getdata
}


getLivres():any[] {
this.updateLivres();
return this.lstLivres;
  }

  togglePanier(cpr:string) {}
  addLivre(livre:any){}
  delLivres(cpr:any){}


}
