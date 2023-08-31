import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public myForm: FormGroup = this.fb.group({
    Usuario:    ['cualquiera', [ Validators.required ]],
    Password: ['cualquiera', [ Validators.required ]],
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}


  login() {
    this.authService.login(this.myForm)
    .subscribe();
    if(this.authService.isLogged) {
      this.router.navigateByUrl('/fifa');
    }
  }
}
