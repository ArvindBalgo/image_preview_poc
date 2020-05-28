import { Component } from '@angular/core';

import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imageSrc: Array<any> =  [];
  files: Array<any> = [];
  constructor(public domSanitizer: DomSanitizer) {}


  addFile(event: any) {
    const file = event.target.files[0];
    if ( file instanceof Blob ) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc.push(reader.result);
      };
      reader.readAsDataURL(file);
      this.files.push(file)
      console.log(this.files, 'image data');
    }
  }

}
