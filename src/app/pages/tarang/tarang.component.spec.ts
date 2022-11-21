import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarangComponent } from './tarang.component';

describe('TarangComponent', () => {
  let component: TarangComponent;
  let fixture: ComponentFixture<TarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
