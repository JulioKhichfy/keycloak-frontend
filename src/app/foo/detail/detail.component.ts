import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Foo } from 'src/app/model/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  foo$: Observable<Foo>;
  
  constructor(private fooService:FooService,
            private activedRoute: ActivatedRoute,
            private router: Router) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params.id;
    /*this.fooService.detail(id).subscribe((elem:Foo)=>{
      this.foo = elem;
    },
    err => console.log(err))*/
    this.foo$ = this.fooService.detail(id);
  }

  voltar(){
    this.router.navigate(['/lista'])
  }

}
