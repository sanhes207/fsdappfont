import { Component, OnInit }      from '@angular/core';
import { delay, repeat }          from 'rxjs/operators';
import { Project }                from '../models/project';
import { HttpService }            from '../http.service';
import { plainToClass }           from 'class-transformer';
import { MatDialog }              from '@angular/material/dialog';
import { AddTodoFormComponent }   from '../add-todo-form/add-todo-form.component';

@Component({
  selector:    'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: [ './main-title.component.scss'],
  providers: [HttpService]
})

export class MainTitleComponent implements OnInit{
  project: Project;

  constructor(private http: HttpService, public dialog: MatDialog) {}

  ngOnInit(){
    this.getAllList();
  }

  openDialog(): void {
      this.dialog.open(AddTodoFormComponent, {
        width: '250px',
      }).afterClosed().subscribe(result => {
        this.getAllList();
      });
  }

  getAllList(){
    this.http.getProject().subscribe(value => {
      this.project = plainToClass(Project, value);
    });
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
