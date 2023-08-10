import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heros = HEROES;

  selectedHero?: Hero; /*  don't assign any value to it since there is no selected hero when the application starts. */

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(
      `This console.log is left on purpose since it is a tutorial. Someone clicked on ${hero.name}`
    );
  }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Gatubela',
  //   description:
  //     'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  // };
}
