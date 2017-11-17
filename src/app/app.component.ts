import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wishlist app';

  logout(): void{
    console.log('Log out here');
  }
}
