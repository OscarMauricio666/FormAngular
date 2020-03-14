import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';





@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {

  form: FormGroup;

  constructor() {
    this.buildForm();
   }
  private buildForm(){
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      text: new FormControl('',[Validators.maxLength(200)]),
      category: new FormControl('',[Validators.required]),
      gener: new FormControl('',[Validators.required]),      
    });
    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

}
