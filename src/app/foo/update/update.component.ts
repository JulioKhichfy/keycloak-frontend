import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foo } from 'src/app/model/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fooService:FooService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  foo: Foo;
  
  ngOnInit(): void {

    const id = this.activedRoute.snapshot.params.id;
    this.fooService.detail(id).subscribe((data: Foo) => {
      this.foo = data;
    },
    err =>{
      console.log(err);
    })
  }

  onUpdate(): void {
    const id = this.activedRoute.snapshot.params.id;
    this.fooService.update(id, this.foo).subscribe((data)=>{
      console.log(data);
      this.voltar();
    }, err => {
      console.log(err)
    })
  }

  voltar(){
    this.router.navigate(['/lista']);
  }

}
