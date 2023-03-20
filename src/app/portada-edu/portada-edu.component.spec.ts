import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaEduComponent } from './portada-edu.component';

describe('PortadaEduComponent', () => {
  let component: PortadaEduComponent;
  let fixture: ComponentFixture<PortadaEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
