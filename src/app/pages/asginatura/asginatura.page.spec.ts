import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsginaturaPage } from './asginatura.page';

describe('AsginaturaPage', () => {
  let component: AsginaturaPage;
  let fixture: ComponentFixture<AsginaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsginaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
