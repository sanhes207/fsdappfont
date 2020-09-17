import { Injectable  } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  Get(): Observable<object> {
    return this.http.get(environment.prodURI);
  }
  
  public Update(idProject: number, idTodo: number, isCompleted: boolean): Observable<object> {
    return this.http.put(environment.prodURI + idProject + '/todos/' + idTodo, {isCompleted});
  }

  public AddT(text: string, project_id: number): Observable<object> {
    return this.http.post( environment.todoURI, { project_id, text } )
  }

  public AddTaP(text: string, title: string): Observable<object>{
    return this.http.post( environment.todoURI, { title, text } );
  }
}
