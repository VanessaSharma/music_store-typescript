import { Component } from '@angular/core';
import { Album }  from './album.model';


@Component({
  selector: 'my-store',
  template: `
  <div class="container">
    <h1>Vintage CD Store</h1>
    <album-list
    [childAlbumList]="masterAlbumList"
    (clickSender)="showDetails($event)"
    ></album-list>
    <edit-album
    [childSelectedAlbum]="selectedAlbum"
    (doneClickedSender)="finishedEditing()"
    ></edit-album>
    <new-album
    (newAlbumSender)="addAlbum($event)"
    ></new-album>
  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
     new Album("Waiting for the Sun", "The Doors", 10, "Rock"),
     new Album("The Island of Dr.Electrico", "The Bombay Royale", 8, "Indian"),
     new Album("Desi Dance PARTY!", "The Bombay Royale", 8, "Indian"),
     new Album("Tarzan", "Bappi Lahiri & Alisha", 12, "Indian"),
     new Album("Strange Days", "The Doors", 9, "Rock"),
  ];
  selectedAlbum: Album = null;
  showDetails(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }
  finishedEditing() {
    this.selectedAlbum =null;
  }
  addAlbum(newAlbumFromChild: Album) {
    this.masterAlbumList.push(newAlbumFromChild);
  }
}
// 
// export class Album {
//   constructor(public name: string, public artist: string, public price: number, public genre: string) { }
// }
