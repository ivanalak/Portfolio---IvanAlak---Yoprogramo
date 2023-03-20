import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProComponent } from './inicio-pro.component';

describe('InicioProComponent', () => {
  let component: InicioProComponent;
  let fixture: ComponentFixture<InicioProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
