import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHerComponent } from './editar-her.component';

describe('EditarHerComponent', () => {
  let component: EditarHerComponent;
  let fixture: ComponentFixture<EditarHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
