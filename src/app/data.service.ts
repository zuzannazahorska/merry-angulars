import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  doneItems: any[] = [];
  constructor() {}

  todos: Array<any> = [
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

  removeItem(dupka: number) {
    const index = this.todos.findIndex((item) => item.id === dupka) + 1;
    console.log('The index is: ', index);
    this.todos.splice(index - 1, 1);
  }

  updateItem(id: number) {
    const item = this.todos.find((x) => x.id === id);
    console.log('Item.id equals: ', item.id);
    if (item) {
      console.log('The variable item equals: ', item);
      item.status = true;
      // this.todos = this.todos.filter((x) => x.id !== id);
      console.log('todos: ', this.todos);

      if (item.status === true) {
        this.doneItems.push(item);
        this.todos.splice(this.todos.indexOf(item), 1);
      }
    }
  }
}
