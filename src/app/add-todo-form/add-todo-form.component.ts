import {Component, Inject, OnInit }          from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef }      from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Project}                             from '../models/project';
import {plainToClass}                        from 'class-transformer';
import {HttpService}                         from '../http.service';


@Component({
  selector:    'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: [ './add-todo-form.component.scss'],
  providers: [HttpService]
})
export class AddTodoFormComponent implements OnInit {

  constructor(private http: HttpService,
              public dialogRef: MatDialogRef<AddTodoFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: object,
              private fb: FormBuilder)
  {
    http.getProject().pipe().subscribe(value =>
      {this.project = plainToClass(Project, value); });
  }

  AddReactiveForm: FormGroup;
  project: Project;

  ngOnInit(): void {
    this.initForm();
  }

  closeDialog(): void {
    this.dialogRef.close('end!');
  }

  initForm(): void{
    this.AddReactiveForm = this.fb.group({
      title:   [null, [Validators.pattern(/^.{0,30}$/)]],
      text:    [null, [Validators.required, Validators.pattern(/^.{1,30}$/)]],
      project: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    const controls = this.AddReactiveForm.controls;
    if (this.AddReactiveForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    if (this.AddReactiveForm.value.project === 'new'){
      this.http.addProjectAndTodoList(this.AddReactiveForm.value.text,
        this.AddReactiveForm.value.title).subscribe();
    }
    else{
      this.http.addTodoList(this.AddReactiveForm.value.text,
        this.AddReactiveForm.value.project.id).subscribe();
    }
    this.dialogRef.close();
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
