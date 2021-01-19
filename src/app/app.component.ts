import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    myForm: FormGroup;
  submittedHours: FormArray;
  constructor(private fb: FormBuilder) { }
  name = 'Angular';
  arr=[1,2,3,4,5,6,7]
  ngOnInit() {
    this.myForm = this.fb.group({
      submittedHours: this.fb.array([])
    })
    this.submittedHours = this.myForm.get('submittedHours') as FormArray;
    for(let i=0;i<7;i++){

      this.submittedHours.push(this.createItem());
    }
  }

  createItem() {
    return this.fb.group({
      hours: ['',]
    })
  }


  addHours(type,value,index,control,formGroup){
debugger
  }
}
