import { HeroesService } from 'src/app/services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(
    private activatedRouter: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    //Manera de obtener los parametros del componente de heroes
    this.activatedRouter.params.subscribe((params) => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log('heroe', this.heroe);

    });
  }
  ngOnInit() {}
}
