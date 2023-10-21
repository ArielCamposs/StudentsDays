import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupComponentPage } from './popup-component.page';

describe('PopupComponentPage', () => {
  let component: PopupComponentPage;
  let fixture: ComponentFixture<PopupComponentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopupComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
