import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustMembersComponent } from './trust-members.component';

describe('TrustMembersComponent', () => {
  let component: TrustMembersComponent;
  let fixture: ComponentFixture<TrustMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
