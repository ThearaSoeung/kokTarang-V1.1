import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoktarangPageComponent } from './koktarang-page.component';

describe('KoktarangPageComponent', () => {
  let component: KoktarangPageComponent;
  let fixture: ComponentFixture<KoktarangPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoktarangPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoktarangPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
