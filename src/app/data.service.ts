import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private todos: Array<any> = [
    {
      id: 1,
      name: 'colonize Mars',
      status: false,
    },
    {
      id: 2,
      name: 'spam posts on Twitter',
      status: false,
    },
    {
      id: 3,
      name: 'buy Facebook',
      status: false,
    },
  ];
  getData() {
    return this.todos;
  }

  addItem(itemObj: object) {
    this.todos.push(itemObj);
  }

  removeItem(id: number) {
    
  }
}
