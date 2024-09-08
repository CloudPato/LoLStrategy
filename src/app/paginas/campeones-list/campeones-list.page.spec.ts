import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonesListPage } from './campeones-list.page';

describe('CampeonesListPage', () => {
  let component: CampeonesListPage;
  let fixture: ComponentFixture<CampeonesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
