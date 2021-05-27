import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm !: FormGroup;


  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if(this.myForm.valid){
      const value = this.myForm.value;
      this.authService.login(value.email, value.password)
      .then( () => {
        //alert('Bienvenido a la sesion')
        Swal.fire({
          text:'Inicio de session con exito',
          icon: 'success',
          showConfirmButton: true,
        });
      })
      .catch( () => {
        //alert('Usuario no valido')
        Swal.fire({
          text:'Usuario no valido',
          icon: 'error',
          showConfirmButton: true,
        });
      });
    }
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

}
