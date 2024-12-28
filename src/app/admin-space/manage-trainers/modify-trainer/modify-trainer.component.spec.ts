import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTrainerComponent } from './modify-trainer.component';

describe('ModifyTrainerComponent', () => {
  let component: ModifyTrainerComponent;
  let fixture: ComponentFixture<ModifyTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
