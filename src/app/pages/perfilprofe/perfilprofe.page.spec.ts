import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilprofePage } from './perfilprofe.page';

describe('PerfilprofePage', () => {
  let component: PerfilprofePage;
  let fixture: ComponentFixture<PerfilprofePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
