import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONENTSContactoComponent } from './components-contacto.component';

describe('COMPONENTSContactoComponent', () => {
  let component: COMPONENTSContactoComponent;
  let fixture: ComponentFixture<COMPONENTSContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPONENTSContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COMPONENTSContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
