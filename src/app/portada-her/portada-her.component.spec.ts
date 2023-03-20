import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaHerComponent } from './portada-her.component';

describe('PortadaHerComponent', () => {
  let component: PortadaHerComponent;
  let fixture: ComponentFixture<PortadaHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaHerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
