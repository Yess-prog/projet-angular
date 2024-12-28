import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecoComponent } from './inseco.component';

describe('InsecoComponent', () => {
  let component: InsecoComponent;
  let fixture: ComponentFixture<InsecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
