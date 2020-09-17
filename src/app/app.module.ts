import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { AppComponent }                     from './app.component';
import { MatToolbarModule }                 from '@angular/material/toolbar';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { MatIconModule }                    from '@angular/material/icon';
import { MatButtonModule }                  from '@angular/material/button';
import { MatCheckboxModule }                from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule }                    from '@angular/material/card';
import { MatListModule }                    from '@angular/material/list';
import { ToolbarComponent }                 from './toolbar/toolbar.component';
import { MatDialogModule }                  from '@angular/material/dialog';
import { MatInputModule }                   from '@angular/material/input';
import { MatOptionModule }                  from '@angular/material/core';
import { MatSelectModule }                  from '@angular/material/select';
import { HttpService }                      from "./http.service";
import { HttpClientModule }                 from "@angular/common/http";
import { MainTitleComponent }               from './main-title/main-title.component';
import { AddTodoFormComponent }             from './add-todo-form/add-todo-form.component';
import { CheckComponent }                   from './check/check.component';
import { CardComponent }                    from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainTitleComponent,
    AddTodoFormComponent,
    CheckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
