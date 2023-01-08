import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent {
  todos: any[] = [];
  constructor(private dataService: DataService) {
    console.log('open component class');
  }
  ngOnInit() {
    this.todos = this.dataService.getData();
    console.log('this comes from the open component');
  }

  addItem(item: string) {
    const todoObj = {
      id: this.todos.length + 1,
      name: item,
      status: false,
    };
    this.dataService.addItem(todoObj);
  }

  removeItem(event: any) {
    console.log(event.target.parentElement.getAttribute('id'));
    const id = event.target.parentElement.getAttribute('id');
    this.dataService.removeItem(id);
  }
}
