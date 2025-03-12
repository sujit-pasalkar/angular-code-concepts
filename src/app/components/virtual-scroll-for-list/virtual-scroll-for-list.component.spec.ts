import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollForListComponent } from './virtual-scroll-for-list.component';

describe('VirtualScrollForListComponent', () => {
  let component: VirtualScrollForListComponent;
  let fixture: ComponentFixture<VirtualScrollForListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScrollForListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrollForListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
