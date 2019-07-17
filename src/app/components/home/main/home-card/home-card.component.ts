import { Component, OnInit, Output, Input } from '@angular/core';
import { IHomeCard } from '../home-card';


@Component({
  selector: 'ots-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() menuCard: IHomeCard;

  constructor() { }

  ngOnInit() {
  }

}
