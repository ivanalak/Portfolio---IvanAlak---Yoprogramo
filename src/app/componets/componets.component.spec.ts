import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPONETSComponent } from './componets.component';

describe('COMPONETSComponent', () => {
  let component: COMPONETSComponent;
  let fixture: ComponentFixture<COMPONETSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPONETSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COMPONETSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
