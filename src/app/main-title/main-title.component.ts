import { Component }    from '@angular/core';
import {delay, repeat}  from 'rxjs/operators';
import {Project}        from '../models/project';
import {HttpService}    from '../http.service';
import {plainToClass}   from 'class-transformer';

@Component({
  selector:    'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: [ './main-title.component.scss'],
  providers: [HttpService]
})

export class MainTitleComponent{
  project: Project;

  constructor(http: HttpService) {
    http.Get().pipe(repeat()).subscribe(value =>
      {this.project = plainToClass(Project, value);
    });
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
