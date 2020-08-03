import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CameraService } from 'src/app/core/services/camera/camera.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  title = 'InstaCloneApp';
  constructor(private _camera: CameraService) { }

  ngOnInit(): void {
    defineCustomElements(window);
  }

async takePicture() {

  const {base64String = null} = await this._camera.takePicture().catch(err => err);

  console.log(base64String);
}


}
