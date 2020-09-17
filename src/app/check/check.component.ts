import { Component, Input } from '@angular/core';
import { Todo }             from '../models/todo';
import { HttpService }      from '../http.service';

@Component({
  selector:    'app-check',
  templateUrl: './check.component.html',
  styleUrls: [ './check.component.scss'],
  providers: [HttpService]
})
export class CheckComponent {

  constructor(private http: HttpService) {}

  @Input() Todo: Todo;

  Update(): void{
    this.http.Update(this.Todo.project_id, this.Todo.id, this.Todo.isCompleted).subscribe();
  }

}
