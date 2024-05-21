import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroes = ['Spiderman', 'Antman', 'Thor', 'Ironman', 'Hulk']
  public removedHero : string | undefined

  removeLastHero(): void {
    this.removedHero = this.heroes.pop()
  }
}
