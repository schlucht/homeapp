import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../top-menu/topmenu';
import { menuList } from './menuList';

@Component({
  selector: 'ots-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  menu: TopMenu[] = menuList;

  constructor() { }

  ngOnInit() {
    // console.log(this.menu);
  }

}
