import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DirectorioCarrerasAmbientesPage } from './directorio-carreras-ambientes.page';

describe('DirectorioCarrerasAmbientesPage', () => {
  let component: DirectorioCarrerasAmbientesPage;
  let fixture: ComponentFixture<DirectorioCarrerasAmbientesPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DirectorioCarrerasAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
