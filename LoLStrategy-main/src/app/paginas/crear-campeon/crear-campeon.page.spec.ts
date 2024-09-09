import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCampeonPage } from './crear-campeon.page';

describe('CrearCampeonPage', () => {
  let component: CrearCampeonPage;
  let fixture: ComponentFixture<CrearCampeonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
