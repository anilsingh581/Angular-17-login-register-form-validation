import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Login forms validation in Angular 17';
    data: any;
    loginSuccess =false;

    constructor(private loginService: LoginService, private router: Router) {
      
    }

    form = {
      email: '',
      password: ''
    };
    
    ngOnInit(){
      this.fetchData();
    }

    onLogin(): void {
      console.log(JSON.stringify(this.form));
      //call to login servcie and push the login credentials to validate on server. 
      this.data = this.loginService.login(this.form);
      console.log(this.data );
      
      if(this.data){
        this.loginSuccess =true;
        this.router.navigateByUrl('/home');
      }
    }

    private fetchData(): void {
      console.log(JSON.stringify(this.form));
      this.loginService.getData().subscribe(result => {
          this.data = result;
          console.log(this.data);
      });
    }  
}
