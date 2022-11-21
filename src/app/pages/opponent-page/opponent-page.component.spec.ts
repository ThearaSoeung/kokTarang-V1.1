import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentPageComponent } from './opponent-page.component';

describe('OpponentPageComponent', () => {
  let component: OpponentPageComponent;
  let fixture: ComponentFixture<OpponentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
