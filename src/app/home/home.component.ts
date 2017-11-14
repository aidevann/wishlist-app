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

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  
  getItems(): void{
    this.itemService.getItems()
      .subscribe(users => this.items = users);
  }

  delete(item: Item): void{
    console.log(item);
    this.items = this.items.filter(h =>h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

}
