import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCandidateComponent } from './modify-candidate.component';

describe('ModifyCandidateComponent', () => {
  let component: ModifyCandidateComponent;
  let fixture: ComponentFixture<ModifyCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
