import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() habitInput: Habit= new Habit('',"0");
  habitString = '0';
  MAXDAYS = 21;
  constructor() { }

  ngOnInit(): void {
  }
  
  onValuePercent(habitInput:string) : string{
    let habitNumber = parseInt(habitInput)
    habitNumber = habitNumber*100/this.MAXDAYS
    this.habitString = String(habitNumber)
    return this.habitString
  }
}
