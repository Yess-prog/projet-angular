import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTechniqueComponent } from './details-technique.component';

describe('DetailsTechniqueComponent', () => {
  let component: DetailsTechniqueComponent;
  let fixture: ComponentFixture<DetailsTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTechniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
