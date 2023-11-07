import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
})
export class HeroeSearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      //console.log('params', params['termino']);
      this.termino = params['termino'];
      console.log('termino', this.termino);

      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log('heroes', this.heroes);
    });
  }
}
