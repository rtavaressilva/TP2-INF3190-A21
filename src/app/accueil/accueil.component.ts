import { Component, OnInit } from '@angular/core';
import * as listeLivres from '../../assets/data/livres.json';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  livres: any = (listeLivres as any).default;
  livreEnrabais: boolean = false;


  afficherLivreEnRabais() {    
    if(this.livres.rab > 0) {
      this.livreEnrabais = true;
      console.log(this.livres);    
    } 
    return this.livreEnrabais;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
