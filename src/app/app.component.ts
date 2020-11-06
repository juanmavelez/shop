import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '.<router-outlet><router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';
  items: string[] = ['juanma', 'julian', 'perez'];
  power = 10;

  addItem(): void {
    this.items.push('new item');
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
