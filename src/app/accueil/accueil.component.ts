import { Component, OnInit } from '@angular/core';
import * as listeLivres from '../../assets/data/livres.json';//!TBC

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  livres:any = (listeLivres as any).default; //!TBC
  constructor() { }

  ngOnInit(): void {
  }

}
