import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss'
})
export class LikeComponent {

  @Input() likesCount: number = 0;
  @Input() isLiked: boolean = false;

  color = this.isLiked ? 'deeppink' : 'grey';

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
    }

}
