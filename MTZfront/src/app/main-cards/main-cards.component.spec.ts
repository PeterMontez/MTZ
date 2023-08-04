import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardsComponent } from './main-cards.component';

describe('MainCardsComponent', () => {
  let component: MainCardsComponent;
  let fixture: ComponentFixture<MainCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCardsComponent]
    });
    fixture = TestBed.createComponent(MainCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
