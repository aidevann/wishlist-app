import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
