import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.todos = this.dataService.getData();
    console.log(this.todos);
  }
}
