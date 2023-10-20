import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PlacaGraduadosPage } from './placa-graduados.page';

describe('PlacaGraduadosPage', () => {
  let component: PlacaGraduadosPage;
  let fixture: ComponentFixture<PlacaGraduadosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PlacaGraduadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
