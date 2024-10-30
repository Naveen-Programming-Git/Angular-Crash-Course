import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'authors',
  standalone: true,
  imports: [NgFor],
  providers: [AuthorsService],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {
  title = "Authors"
  authors;

  constructor(authorService : AuthorsService){
    this.authors = authorService.getAuthors();
  }
}
