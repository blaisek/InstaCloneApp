import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( private _ctrl: AlertController) { }

  async display(message: string, option) {
    const ionAlert = await this._ctrl.create({
      header: 'ERROR',
      message,
      ...option
    });
    ionAlert.present();
  }
}
