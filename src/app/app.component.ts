import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'dynamic-form-app';
  configData:any

  ngOnInit() {
    this.getConfigData();
  }

  getConfigData() {
    const apiUrl = 'http://localhost:3000/json-config'
    
    this.http.get(apiUrl).subscribe((data) => {
      console.log(data); // Handle the API response data here
      this.configData = data;
    });
  }

  onSubmit() {
    
  }
}
