import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEconomieComponent } from './details-economie.component';

describe('DetailsEconomieComponent', () => {
  let component: DetailsEconomieComponent;
  let fixture: ComponentFixture<DetailsEconomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsEconomieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEconomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
