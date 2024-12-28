import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMecaniqueComponent } from './details-mecanique.component';

describe('DetailsMecaniqueComponent', () => {
  let component: DetailsMecaniqueComponent;
  let fixture: ComponentFixture<DetailsMecaniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMecaniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMecaniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
