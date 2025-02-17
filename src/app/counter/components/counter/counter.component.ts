import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
        <p>Contador: {{counter}}</p>
        <button (click)="increaseBy(-1)">-1</button>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="counter = 0" >Reset</button>
    `
})

export class CounterComponent {

    public counter: number = 0

    increaseBy(value: number): void{
        this.counter += value
    }
}