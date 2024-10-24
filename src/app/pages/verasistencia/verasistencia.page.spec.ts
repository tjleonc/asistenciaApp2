import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerasistenciaPage } from './verasistencia.page';

describe('VerasistenciaPage', () => {
  let component: VerasistenciaPage;
  let fixture: ComponentFixture<VerasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
