import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "iron man"
  public age:  number = 40

  
  public get capitalizedName() : string {
    return this.name.toUpperCase()
  }
  
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(name: string): void {
    this.name = name
  }

  changeAge(age: number): void {
    this.age = age
  }

  resetData(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
