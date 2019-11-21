import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSTComponent } from './add-st.component';

describe('AddSTComponent', () => {
  let component: AddSTComponent;
  let fixture: ComponentFixture<AddSTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
