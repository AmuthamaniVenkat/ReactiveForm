import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  registerForm: FormGroup;
  submitted = false;
  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm = this.fromBuilder.group({
      firstName: ['', Validators.required],
       lastName: ['', Validators.required],
          email: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(6)]],
confirmPassword: ['', Validators.required]
    }, {
        validators: MustMatch('password', 'confirmPassword')
      })
  }
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    debugger;
    this.submitted = true;

    if (this.registerForm.invalid) return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
