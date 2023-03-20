import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashbpardComponent } from './user-dashbpard.component';

describe('UserDashbpardComponent', () => {
  let component: UserDashbpardComponent;
  let fixture: ComponentFixture<UserDashbpardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashbpardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashbpardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
