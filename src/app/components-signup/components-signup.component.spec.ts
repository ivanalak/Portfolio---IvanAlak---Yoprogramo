import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSignupComponent } from './components-signup.component';

describe('ComponentsSignupComponent', () => {
  let component: ComponentsSignupComponent;
  let fixture: ComponentFixture<ComponentsSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
