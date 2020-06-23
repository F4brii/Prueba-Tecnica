import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeComponent } from './see.component';

describe('SeeComponent', () => {
  let component: SeeComponent;
  let fixture: ComponentFixture<SeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
