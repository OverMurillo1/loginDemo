import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if(this.myForm.valid){
      const value = this.myForm.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(() =>{
        Swal.fire({
          text:'Correo ya existe',
          icon: 'error',
          showConfirmButton: true,
        });
      })
    }
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )]],
      password: ['', [Validators.required]],
    });
  }

}
