import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjobComponent } from './njob.component';

describe('NjobComponent', () => {
  let component: NjobComponent;
  let fixture: ComponentFixture<NjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
