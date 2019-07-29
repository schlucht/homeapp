import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TopMenu } from './topmenu';

@Component({
  selector: 'ots-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
    activElement: HTMLUListElement = null ;
    @Input() menuData: TopMenu[];

    @ViewChild('navElement', { static: false }) navElement: ElementRef;

    data = this.menuData;
    constructor() { }

    ngOnInit() {
    }

    showMenu(dat: TopMenu) {   
         console.log(dat);         
         dat.visibility = !dat.visibility;

    }
}
