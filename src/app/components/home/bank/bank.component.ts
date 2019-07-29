import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../top-menu/topmenu';
import { menuList } from '../bank/bankMenuList';

@Component({
  selector: 'ots-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  menu: TopMenu[] = menuList;
  constructor() { }

  ngOnInit() {
  }

}
