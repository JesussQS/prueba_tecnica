import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DirectorioCarrerasPage } from './directorio-carreras.page';

describe('DirectorioCarrerasPage', () => {
  let component: DirectorioCarrerasPage;
  let fixture: ComponentFixture<DirectorioCarrerasPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DirectorioCarrerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
