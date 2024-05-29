import { Component } from '@angular/core';
import { AnimalsService } from './animals.service';
import { Animal, VettAnimal } from './animals.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = new Array<Animal>()

  form = new FormGroup({
    "name" : new FormControl(),
    "type" : new FormControl(),
  });

  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['type'].value);
    let a : Animal = {
      "id" : '0',
      "name" : this.form.controls['name'].value,
      "type" : this.form.controls['type'].value,

    }
  }

  constructor(private animalService : AnimalsService)
  {
    this.animalService.getAnimals().subscribe(
      (data) => {
        console.log(data);
        a.id = data['id'];
        this.data.push(a)
      }
    )
  }

}
