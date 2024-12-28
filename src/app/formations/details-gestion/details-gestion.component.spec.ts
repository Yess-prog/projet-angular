import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGestionComponent } from './details-gestion.component';

describe('DetailsGestionComponent', () => {
  let component: DetailsGestionComponent;
  let fixture: ComponentFixture<DetailsGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
