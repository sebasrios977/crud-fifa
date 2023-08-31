import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isLogged: boolean = false;
  private currentUser?: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    this.isLogged = this.authService.isLogged;
    this.currentUser = this.authService.currentUser;
  }



  login(): void {
    this.router.navigateByUrl('/auth');
  }


  logout(): void {
    this.authService.logout(this.currentUser!);
    this.isLogged = this.authService.isLogged;
    this.router.navigateByUrl('/fifa/teams');
  }
}
