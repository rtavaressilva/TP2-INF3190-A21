import { Component, OnInit } from '@angular/core';
import * as listeLivres from '../../assets/data/livres.json';

interface listeLivres {
  cpr: Number;
  aut: String;
  tit: String;
  pri: String;
  rab: Number;
  des: String;
  nis: String;
  img: String;
} 


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  livres: any = (listeLivres as any).default;
  colones: string[] = ['cpr', 'aut', 'tit', 'pri', 'rab', 'panier'];


  constructor() {
    console.log(this.livres);
    }
  

  ngOnInit(): void {
  }
  
}
