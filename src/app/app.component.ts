import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestDemo';

  constructor(private testServiceService: TestServiceService) {}

  fetch() {
    this.testServiceService.fetch().subscribe(data => {
      console.log(data);
    },
    error=> {
      debugger;
      console.log('app component error!' + JSON.stringify(error));
    });
  }
}
