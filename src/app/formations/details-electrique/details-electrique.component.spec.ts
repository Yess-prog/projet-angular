import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsElectriqueComponent } from './details-electrique.component';

describe('DetailsElectriqueComponent', () => {
  let component: DetailsElectriqueComponent;
  let fixture: ComponentFixture<DetailsElectriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsElectriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsElectriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
