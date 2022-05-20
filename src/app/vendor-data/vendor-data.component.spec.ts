import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDataComponent } from './vendor-data.component';

describe('VendorDataComponent', () => {
  let component: VendorDataComponent;
  let fixture: ComponentFixture<VendorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
