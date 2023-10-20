import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuOpcionesPage } from './menu-opciones.page';

describe('MenuOpcionesPage', () => {
  let component: MenuOpcionesPage;
  let fixture: ComponentFixture<MenuOpcionesPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(MenuOpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
