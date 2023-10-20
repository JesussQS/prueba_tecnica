import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AFiaDataPage } from './a-fia-data.page';

describe('AFiaDataPage', () => {
  let component: AFiaDataPage;
  let fixture: ComponentFixture<AFiaDataPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AFiaDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
