import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }



}
