import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DetalleAmbientePage } from './detalle-ambiente.page';

describe('DetalleAmbientePage', () => {
  let component: DetalleAmbientePage;
  let fixture: ComponentFixture<DetalleAmbientePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DetalleAmbientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
