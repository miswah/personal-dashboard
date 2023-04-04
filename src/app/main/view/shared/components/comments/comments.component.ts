import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComment } from 'app/main/view/course/interfaces';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
@Input() comments : CourseComment;
@Output() saveNewComment  = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  saveComment(value:string){
    this.saveNewComment.emit(value);
  }
}
