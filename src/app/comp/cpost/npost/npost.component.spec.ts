import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpostComponent } from './npost.component';

describe('NpostComponent', () => {
  let component: NpostComponent;
  let fixture: ComponentFixture<NpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
