import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesImagesComponent } from './updates-images.component';

describe('UpdatesImagesComponent', () => {
  let component: UpdatesImagesComponent;
  let fixture: ComponentFixture<UpdatesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
