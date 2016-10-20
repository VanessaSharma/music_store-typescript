import { Component, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  template: `
  <h1>New Album</h1>
   <div>
     <label>Enter Album Name</label>
     <input #newName>
   </div>
   <div>
     <label>Enter Album Artist</label>
     <input #newArtist>
   </div>
   <div>
     <label>Enter Album Price</label>
     <input #newPrice>
   </div>
   <div>
     <label>Enter Album Genre</label>
     <input #newGenre>
     <button (click)="addClicked(newName.value, newArtist.value, newPrice.value, newGenre.value);
     newName.value='';
     newArtist.value='';
     newPrice.value='';
     newGenre.value='';
     ">Add</button>
   </div>
   `
})

export class NewAlbumComponent {
  @Output() newAlbumSender = new EventEmitter();
  addClicked(name: string, artist: string, price: number, genre: string) {
    var newAlbumToAdd: Album = new Album(name, artist, price, genre);
    this.newAlbumSender.emit(newAlbumToAdd)
  }
}
