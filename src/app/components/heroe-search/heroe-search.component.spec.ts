import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeSearchComponent } from './heroe-search.component';

describe('HeroeSearchComponent', () => {
  let component: HeroeSearchComponent;
  let fixture: ComponentFixture<HeroeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeSearchComponent]
    });
    fixture = TestBed.createComponent(HeroeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
