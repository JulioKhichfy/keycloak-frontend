import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Foo } from 'src/app/model/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  foos$: Observable<Foo[]>;

  constructor(private fooService : FooService) { }
  

  ngOnInit(): void {

    this.foos$ = this.fooService.list();

  }

}
