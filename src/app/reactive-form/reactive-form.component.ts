import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  signupForm = new FormGroup(
  {
    name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    age : new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    // email : new FormControl('',[Validators.required,Validators.email]) .com part in not validating
    email : new FormControl('',[Validators.required,Validators.pattern('^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$')])
    
  }
  );

  handleSubmit(){
    console.log(this.signupForm.value)
  }

  // this is getter function, it will return all control like name,age for validation we are using this 
  get getControls(){
    return this.signupForm.controls;
  }
}
