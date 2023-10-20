import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroUsuarioPage } from './registro-usuario.page';

describe('RegistroUsuarioPage', () => {
  let component: RegistroUsuarioPage;
  let fixture: ComponentFixture<RegistroUsuarioPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RegistroUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
