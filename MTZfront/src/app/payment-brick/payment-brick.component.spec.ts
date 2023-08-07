import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBrickComponent } from './payment-brick.component';

describe('PaymentBrickComponent', () => {
  let component: PaymentBrickComponent;
  let fixture: ComponentFixture<PaymentBrickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBrickComponent]
    });
    fixture = TestBed.createComponent(PaymentBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
