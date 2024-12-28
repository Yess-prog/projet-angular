import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInformatiqueComponent } from './details-informatique.component';

describe('DetailsInformatiqueComponent', () => {
  let component: DetailsInformatiqueComponent;
  let fixture: ComponentFixture<DetailsInformatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsInformatiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
