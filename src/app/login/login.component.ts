import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  signIn(): void {
    this.router.navigate(['/home']);
  }
}
