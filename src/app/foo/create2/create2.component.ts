import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foo } from 'src/app/model/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.component.html',
  styleUrls: ['./create2.component.css']
})
export class Create2Component implements OnInit {

  foo: Foo;
  fooName: string;

  constructor(private fooService: FooService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){

    this.foo = new Foo(null, this.fooName)
    this.fooService.create(this.foo).subscribe(()=>{
      this.voltar();
    }, err => {
      console.log(err);
    })

  }

  voltar(){
    this.router.navigate(['/lista']);
  }

}
