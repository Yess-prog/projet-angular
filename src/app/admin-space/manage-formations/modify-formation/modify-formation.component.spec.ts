import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFormationComponent } from './modify-formation.component';

describe('ModifyFormationComponent', () => {
  let component: ModifyFormationComponent;
  let fixture: ComponentFixture<ModifyFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
