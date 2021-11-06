import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colors: string[] = ['red', 'blue', 'green', 'purple'];

  dog: Animal = { species: 'Dog', sound: 'bark', number_of_legs: 4 };

  cat: Animal = { species: 'Cat', sound: 'meow', number_of_legs: 4 };

  fly: Animal = { species: 'Fly', sound: 'bsss', number_of_legs: 6 };

  animals: Animal[] = [this.dog, this.cat, this.fly];

  prefix: string = 'I am a ';
  name: string = 'Star student';

  speak() {
    let sentence: string = this.prefix + this.name;
    return sentence;
  }
}
