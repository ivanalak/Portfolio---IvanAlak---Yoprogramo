import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaProComponent } from './portada-pro.component';

describe('PortadaProComponent', () => {
  let component: PortadaProComponent;
  let fixture: ComponentFixture<PortadaProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
