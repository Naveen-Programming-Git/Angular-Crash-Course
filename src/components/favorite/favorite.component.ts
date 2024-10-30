import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import exp from 'constants';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  encapsulation: ViewEncapsulation.Emulated,  
  styles: [
    `
    .glyphicon {
      color: blue;
    }
    
    .glyphicon-star{
      color: orange;
    }
    
  `
  ],
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  @Input("isFavorite") isSelected: boolean = false;
  @Output() onFavoriteChangedEvent = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    let favoriteChangedEventArgs = new FavoriteChangedEventArgs();
    favoriteChangedEventArgs.newValue = this.isSelected;
    //this.onFavoriteChangedEvent.emit(this.isSelected); //publish an event
    // this.onFavoriteChangedEvent.emit({ newValue: this.isSelected });
    this.onFavoriteChangedEvent.emit(favoriteChangedEventArgs);
  }
}

export class FavoriteChangedEventArgs{
  newValue!: boolean;
}
