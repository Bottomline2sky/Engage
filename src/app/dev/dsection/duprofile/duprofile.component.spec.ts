import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuprofileComponent } from './duprofile.component';

describe('DuprofileComponent', () => {
  let component: DuprofileComponent;
  let fixture: ComponentFixture<DuprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
