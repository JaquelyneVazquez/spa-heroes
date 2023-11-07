import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  //El @Input le dice al componente que recibe un valor desde afuera
  //decorador
  @Input() heroe: any = {};
  @Input() index: number | undefined;

  //El @Output le dice al componente que emite un valor de hijo a padre
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    //se inicializa el evento eventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  //De esta manera se emite el evento hacia el componente padre para poder hacer la navegacion
  // verHeroe() {
  //   this.heroeSeleccionado.emit(this.index);
  // }

  verHeroe() {
    console.log(`this.index`, this.index);
    this.router.navigate(['/heroe', this.index]);

  }
}
