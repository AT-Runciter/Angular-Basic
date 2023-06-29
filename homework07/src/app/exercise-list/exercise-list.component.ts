import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

import { Observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [];

  interval$!: Observable<number>;
  counter: number = 0;
  isRunning: boolean = false;
  subscription!: Subscription;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);
  }

  addExercise(name: string, category: string): void {
    const exercise: Exercise = { id: 0, name, category };
    this.exerciseService.addExercise(exercise)
      .subscribe(newExercise => {
        this.exercises.push(newExercise);
      });
  }

  deleteExercise(id: number): void {
    this.exerciseService.deleteExercise(id)
      .subscribe(() => {
        this.exercises = this.exercises.filter(e => e.id !== id);
      });
  }

  startCounter(): void {
    if (!this.isRunning) {
      this.interval$ = interval(1000).pipe(take(100));
      this.subscription = this.interval$.subscribe(() => {
        this.counter++;
      });
      this.isRunning = true;
    }
  }
  
  stopCounter(): void {
    if (this.isRunning) {
      this.subscription.unsubscribe();
      this.counter = 0;
      this.isRunning = false;
    }
  }
}
