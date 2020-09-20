import { Injectable  } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Todo }        from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getProject(){
    return this.http.get(environment.prodURI);
  }

  public checkUpdate(todo: Todo){
    return this.http.put(environment.prodURI + todo.project_id + '/todos/' + todo.id, {isCompleted: todo.isCompleted});
  }

  public addTodoList(text: string, project_id: number){
    return this.http.post( environment.todoURI, { project_id, text } );
  }

  public addProjectAndTodoList(text: string, title: string){
    return this.http.post( environment.todoURI, { title, text } );
  }
}
