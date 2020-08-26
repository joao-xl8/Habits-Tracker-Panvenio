import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() habitInput: Habit = new Habit('', 0);
  disabledButton = false
  habitString = '0';
  MAXDAYS = 21;
  constructor() { }

  ngOnInit(): void {
  }

  onValuePercent(habitInput: number): string{
    let habitNumber = habitInput;
    habitNumber = habitNumber * 100 / this.MAXDAYS;
    this.habitString = String(habitNumber);
    return this.habitString;
  }

  onUpClick(): void{
    this.habitInput.progress = this.habitInput.progress + 1;
    this.disabledButton = true;
  }

  onDownClick(): void{
    this.habitInput.progress = this.habitInput.progress - 2;
    this.disabledButton = true;
  }
}
