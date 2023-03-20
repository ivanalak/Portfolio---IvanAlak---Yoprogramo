import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioHerComponent } from './inicio-her.component';

describe('InicioHerComponent', () => {
  let component: InicioHerComponent;
  let fixture: ComponentFixture<InicioHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioHerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
