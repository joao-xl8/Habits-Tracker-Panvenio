import { Component, OnInit } from '@angular/core';
import { Habit } from './habit.model';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habits: Habit[]=[
    new Habit('Hang Out', "10"),
    new Habit('Walk', "20"),
    new Habit('Sleep', "21")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
