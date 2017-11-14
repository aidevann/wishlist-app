import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  users: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  
  getItems(): void{
    this.itemService.getItems()
      .subscribe(users => this.users = users);
  }

}
