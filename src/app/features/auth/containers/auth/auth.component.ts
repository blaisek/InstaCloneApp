import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(private _service: AuthService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl(null, Validators.compose([
        Validators.required, Validators.minLength(3)
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required, Validators.minLength(6)
      ]))
  });
  }

  private  _submitForm(type, data) {

    switch (type) {
      case 'login':
        this._service.login(data);
        break;
      case 'create':
        this._service.createData(data);
    }
  }

  public action(type){

    const data = this.profileForm.value;

    switch (type) {

      case 'login':

        if (data !== null) {
          this._submitForm(type, data);
        }
        break;

      case 'create':
        if (data !== null) {
          this._submitForm(type, data);
        }
        break;
    }
  }

}
