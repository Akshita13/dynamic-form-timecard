import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myForm: FormGroup;
  submittedHours: FormArray;
  hours: FormArray;

  public total = 0;
  public total1=0;
  public total2=0;
  constructor(private fb: FormBuilder) {}
  name = "Angular";
  arr = [1, 2, 3, 4, 5, 6, 7]
  bsubmitHours = [0,0,0,0,0,0,0,0];
  nbsubmitHours = [0,0,0,0,0,0,0,0];

  ngOnInit() {
    
    this.myForm = this.fb.group({
      submittedHours: this.fb.array([])
    });
    this.submittedHours = this.myForm.get("submittedHours") as FormArray;
    
    for (let i = 0; i < 2; i++) {
      this.submittedHours.push(this.createItem());
      console.log(this.submittedHours.controls[i].get('hours'),"jjhg")
     this.hours = this.submittedHours.controls[i].get('hours') as FormArray;
       for(let j=0;j<7;j++){
      this.hours.push(this.createForm())
    }
    }
  
  }

  createItem() {
    return this.fb.group({
      hours: this.fb.array([])
    });
  }

  createForm(){
   return this.fb.group({
      submittedHours: ['']
    });

  }

  addHours(type, value, index, formGroup) {
    debugger;
    console.log(this.hours)
    if(type=='billable'){
      this.bsubmitHours[index]=parseInt(value)
      this.total1=this.total1+this.bsubmitHours[index]
     console.log(this.total1, this.bsubmitHours,"total1")
    // this.total1 = this.total1 + parseInt(value)
    }else if(type=='nonbillable'){

      this.nbsubmitHours[index]=parseInt(value)
      this.total2=this.total2+this.nbsubmitHours[index]
      // this.total2=this.total2 + parseInt(value)
    }
//  console.log(this.submitHours,"this.submitHours[index][0]")
    this.total=this.total1+this.total2
    console.log(this.total1,this.total2, "total");
  }

  onSubmit(id){
    debugger
  }
}
