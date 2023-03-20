import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaExpComponent } from './portada-exp.component';

describe('PortadaExpComponent', () => {
  let component: PortadaExpComponent;
  let fixture: ComponentFixture<PortadaExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
