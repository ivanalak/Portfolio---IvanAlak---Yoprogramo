import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEduComponent } from './inicio-edu.component';

describe('InicioEduComponent', () => {
  let component: InicioEduComponent;
  let fixture: ComponentFixture<InicioEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
