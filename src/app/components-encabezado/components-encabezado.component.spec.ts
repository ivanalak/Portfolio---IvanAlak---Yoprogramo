import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONENTSEncabezadoComponent } from './components-encabezado.component';

describe('COMPONENTSEncabezadoComponent', () => {
  let component: COMPONENTSEncabezadoComponent;
  let fixture: ComponentFixture<COMPONENTSEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPONENTSEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COMPONENTSEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
