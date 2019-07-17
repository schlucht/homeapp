import { Component, OnInit } from '@angular/core';
import { menu } from './menu';

@Component({
  selector: 'ots-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: any[] = menu;
  constructor() { }

  ngOnInit() {
  }

}
