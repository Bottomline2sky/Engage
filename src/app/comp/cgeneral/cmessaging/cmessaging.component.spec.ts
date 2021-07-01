import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmessagingComponent } from './cmessaging.component';

describe('CmessagingComponent', () => {
  let component: CmessagingComponent;
  let fixture: ComponentFixture<CmessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
