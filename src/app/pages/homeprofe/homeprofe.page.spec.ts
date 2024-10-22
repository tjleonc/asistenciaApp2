import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeprofePage } from './homeprofe.page';

describe('HomeprofePage', () => {
  let component: HomeprofePage;
  let fixture: ComponentFixture<HomeprofePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
