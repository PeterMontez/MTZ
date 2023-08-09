import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsCardComponent } from './add-ons-card.component';

describe('AddOnsCardComponent', () => {
  let component: AddOnsCardComponent;
  let fixture: ComponentFixture<AddOnsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOnsCardComponent]
    });
    fixture = TestBed.createComponent(AddOnsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
