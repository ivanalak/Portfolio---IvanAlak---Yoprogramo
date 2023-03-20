import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioExpComponent } from './inicio-exp.component';

describe('InicioExpComponent', () => {
  let component: InicioExpComponent;
  let fixture: ComponentFixture<InicioExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
