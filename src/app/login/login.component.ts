import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  value!: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      userName:'',
      password:''
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      'userName' : new FormControl,
      'password' : new FormControl,
    })
  }

  onLogin() {
    const userName = "admin";
    const password = "123";

    if(userName === this.loginForm.value.userName && password === this.loginForm.value.password) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully!!' });
      this.loginForm.reset();
      setTimeout(() => {
        this.router.navigateByUrl('/admin/dashboard');
      }, 1000);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Enter Valid UserName And Password!!' });
    }
  }
}
