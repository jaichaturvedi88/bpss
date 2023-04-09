import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanchitComponent } from './sanchit.component';

describe('SanchitComponent', () => {
  let component: SanchitComponent;
  let fixture: ComponentFixture<SanchitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanchitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanchitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
