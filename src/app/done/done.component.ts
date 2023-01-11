import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent {
  doneItems: any[] = [];

  constructor(private dataService: DataService) {
    this.doneItems = dataService.doneItems;
  }
}
