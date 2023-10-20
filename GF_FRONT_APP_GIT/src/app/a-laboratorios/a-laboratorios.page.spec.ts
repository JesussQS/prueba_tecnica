import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ALaboratoriosPage } from './a-laboratorios.page';

describe('ALaboratoriosPage', () => {
  let component: ALaboratoriosPage;
  let fixture: ComponentFixture<ALaboratoriosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ALaboratoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
