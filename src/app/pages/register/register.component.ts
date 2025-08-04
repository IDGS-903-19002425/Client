import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ MatInputModule,ReactiveFormsModule,MatIconModule,MatSelectModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{

  fb = inject(FormBuilder);
  registerForm!: FormGroup;
  router = inject(Router);

  confirmPasswordHide : boolean = true;
  passwordHide : boolean = true;



  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:['',Validators.required,Validators.email],
      password:["",Validators.required,Validators],
      fullname:["",Validators.required],
      roles: [""],
      confirmPassword: ["",Validators.required]
    });
    
  }
}
