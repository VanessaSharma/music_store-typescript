import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Vintage CD Store</h1>
    <h3>{{ album.name }}</h3>
  </div>
  `
})

export class AppComponent {
  public albums: Album[] = [
     new Album("Waiting for the Sun", "The Doors", 10, "Rock"),
     new Album("The Island of Dr.Electrico", "The Bombay Royale", 8, "Indian"),
     new Album("The Island of Dr.Electrico", "The Bombay Royale", 8, "Indian"),
     new Album("Tarzan", "Bappi Lahiri & Alisha", 12, "Indian"),
  ]
}

export class Album {
  constructor(public name: string, public artist: string, public price: number, public genre: string) { }
}
