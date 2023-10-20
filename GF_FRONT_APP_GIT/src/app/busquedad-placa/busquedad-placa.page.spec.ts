import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BusquedadPlacaPage } from './busquedad-placa.page';

describe('BusquedadPlacaPage', () => {
  let component: BusquedadPlacaPage;
  let fixture: ComponentFixture<BusquedadPlacaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(BusquedadPlacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
