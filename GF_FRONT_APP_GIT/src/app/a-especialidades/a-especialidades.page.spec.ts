import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AEspecialidadesPage } from './a-especialidades.page';

describe('AEspecialidadesPage', () => {
  let component: AEspecialidadesPage;
  let fixture: ComponentFixture<AEspecialidadesPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AEspecialidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
