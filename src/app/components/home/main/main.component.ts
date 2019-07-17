import { Component, OnInit } from '@angular/core';
import { IHomeCard, homeCard } from './home-card';

@Component({
  selector: 'ots-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  homeCards: IHomeCard[] = homeCard;

  constructor() { }

  ngOnInit() {
  }

}
