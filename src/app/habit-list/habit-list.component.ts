import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Habit } from './habit.model';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit, OnChanges{
  today = new Date();
  date = (this.today.getUTCMonth() + 1) + '/' + this.today.getDate() + '/' + this.today.getFullYear();
  habits: Habit[] = [];
  @Input() itemNameInput= "";
  constructor() {  }

  ngOnChanges(changes){ 
    this.pushName();
  }

  ngOnInit(): void {
  }
  
  pushName(){
    if(this.itemNameInput!==''){
      //console.log(this.itemNameInput + 'estou na list');
      this.habits.push(new Habit(this.itemNameInput,0))
    }
    
  }
}
