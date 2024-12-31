import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup,FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  imports: [ReactiveFormsModule, CommonModule], 
  styleUrls: ['./post-form.component.css'],
  
})
export class PostFormComponent implements OnInit {
  @Input() post: any = {}; // Post data passed from the parent
  @Output() save = new EventEmitter<any>(); // Emit save event to parent
  @Output() cancel = new EventEmitter<void>(); // Emit cancel event to parent

  postForm!: FormGroup;

  ngOnInit(): void {
    // Initialize the reactive form with controls and validations
    this.postForm = new FormGroup({
      id: new FormControl(this.post.id || null), // Hidden field for ID
      title: new FormControl(this.post.title || '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      body: new FormControl(this.post.body || '', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSave() {
    // Emit the form's value to the parent when submitted
    if (this.postForm.valid) {
      this.save.emit(this.postForm.value);
    }
  }

  onCancel() {
    // Emit cancel event to the parent when canceled
    this.cancel.emit();
  }
}
