import { Component, OnInit } from '@angular/core';
import * as listeLivres from '../../assets/data/livres.json';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  livres:any = (listeLivres as any).default;
  // livresDansPanier:any = [this.livres[0]];
  

  
  
}
