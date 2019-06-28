import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    this.response = http.get(this.url);
  }

  url: string = 'http://localhost:3000';

  title = 'express-example-client';

  response: Observable<object>;

  upload(files: FileList) {
    const file = files[0];
    let formData = new FormData();
    formData.append('upload', file);

    formData.append('name', 'jacktok');
    //
    // const data = {
    //   test: "val1",
    //   test2: "val2",
    //   u: formData
    // }
    this.response = this.http.post(
      'http://localhost:3000/upload',
      formData);
  }
}
