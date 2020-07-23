import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public profileForm: FormGroup;

  constructor() { }

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

}
