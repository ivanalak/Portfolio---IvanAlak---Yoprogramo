import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHerComponent } from './agregar-her.component';

describe('AgregarHerComponent', () => {
  let component: AgregarHerComponent;
  let fixture: ComponentFixture<AgregarHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
