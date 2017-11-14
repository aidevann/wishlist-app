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

  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
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