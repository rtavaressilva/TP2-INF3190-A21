import { Component, OnInit } from '@angular/core';
import * as listeLivres from '../../assets/data/livres.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  livres:any = (listeLivres as any).default;

  constructor() { }

  ngOnInit(): void {
  }
  }
