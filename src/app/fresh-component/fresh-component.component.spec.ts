import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshComponentComponent } from './fresh-component.component';

describe('FreshComponentComponent', () => {
  let component: FreshComponentComponent;
  let fixture: ComponentFixture<FreshComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshComponentComponent]
    });
    fixture = TestBed.createComponent(FreshComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
