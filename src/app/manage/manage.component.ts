import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageComponent implements OnInit {

  items: Item[];
   
  showSpinner = true;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe( users =>{
        this.items = users;
        this.showSpinner = false;
    });
  }

  delete(item: Item): void {
    console.log(item);
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

}