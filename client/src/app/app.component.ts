import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {}

  constructor(private http : HttpClient)
  {
    this.http.get('https://4200-jacopobiagi-backbnproje-zf339guxbuz.ws-eu111.gitpod.io/simple_json')
    .subscribe(
      (data) => this.data = data
    )
  }
}
