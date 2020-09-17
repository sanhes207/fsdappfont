import { Component }              from '@angular/core';
import { MatDialog }              from '@angular/material/dialog';
import { AddTodoFormComponent }   from '../add-todo-form/add-todo-form.component';

@Component({
  selector:    'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss']
})

export class ToolbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddTodoFormComponent, {
      width: '250px',
    });
  }

}
