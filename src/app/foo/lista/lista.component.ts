import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Foo } from 'src/app/model/foo';
import { FooService } from 'src/app/services/foo.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  foos$: Observable<Foo[]>;
  isAdmin: boolean;

  constructor(private fooService : FooService,
              private loginService: LoginService) { }
  

  ngOnInit(): void {
    this.isAdmin = this.loginService.getIsAdmin();
    this.foos$ = this.fooService.list();

  }

  remover(id){
    this.fooService.delete(id).subscribe(()=>{
      this.foos$ = this.fooService.list();
    }, err =>{
      console.log(err);
    })
  }

}
