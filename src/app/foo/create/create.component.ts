import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //@ViewChild('f', { static: false }) signupForm: NgForm;

  /*foo = {
    name: ''
  };

  submitted = false;
  */

  //signupForm: FormGroup;
  //forbiddenUsernames = ['Chris', 'Anna'];
  projectForm: FormGroup;

  constructor(private fooService: FooService) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'fooNameControl': new FormControl(
        null,
        [Validators.required,  CustomValidators.invalidProjectName],
        //CustomValidators.asyncInvalidProjectName
        
      ),
    });
  }

  onSubmit() {
    //this.submitted = true;
    let nameForm = this.projectForm.value.fooNameControl;
    let foo = {
      name: nameForm
    }
    
    this.fooService.create(foo).subscribe(()=>{
      console.log("CRIADO");
    }, err => {
      console.log(err);
    })

    this.projectForm.reset();
  }

  

}
