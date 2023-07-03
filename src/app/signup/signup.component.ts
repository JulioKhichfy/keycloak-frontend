import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;


  constructor(private userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    const user = new User(this.username, this.email, this.firstname, this.lastname, this.password);
    this.userService.create(user).subscribe((data:any) =>{
      console.log("data onRegister >>>> " + JSON.stringify(data));
      this.router.navigate(["/"]);
    },error =>{
      console.log("error onRegister >>>> " + error);
    })
  }

  voltar(){
    this.router.navigate(['/lista']);
  }

}
