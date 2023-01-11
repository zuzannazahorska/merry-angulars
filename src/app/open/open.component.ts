import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent {
  todos: any[] = [];
  newItemInput!: any;
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
    this.newItemInput = '';
    this.dataService.addItem(todoObj);
  }

  removeItem(event: any) {
    console.log(
      'The id attribute is: ',
      event.target.parentElement.getAttribute('id')
    );
    const id = parseInt(event.target.parentElement.getAttribute('id'));
    this.dataService.removeItem(id);
  }

  updateItem(id: number) {
    this.dataService.updateItem(id);
  }
}
