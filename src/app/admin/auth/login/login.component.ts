import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/Admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginError: boolean = false;
  errorMessage= '';
  roles : string[] = [];
  constructor(
    private authService: AuthService,
    private tokenService:TokenService,   
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit():void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next:data=>{
        console.log(data);
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginError = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
      },
      error:err => {
          this.errorMessage = err.error.message;
          this.isLoginError = true;
      },
    })
  }
  reloadPage() {
    window.location.reload();
  }
  Admininput = this.fb.group({
    userinput: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9]+$')]],
    pass: ['', [Validators.required]],
  });

  // get f() {
  //   return this.Admininput.controls;
  // }
  
}
