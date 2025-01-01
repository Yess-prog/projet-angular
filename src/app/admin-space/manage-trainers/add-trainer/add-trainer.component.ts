import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../../services/formateur.service';
import { Trainer } from '../../../model/trainer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AddTrainerComponent {
  trainer: Trainer = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    specialization: '',
  };

  constructor(private trainerService: TrainerService, private router: Router) {}

  onSubmit(): void {
    if (this.trainer.nom && this.trainer.prenom && this.trainer.email && this.trainer.specialization) {
      this.trainerService.addTrainer(this.trainer).subscribe(() => {
        console.log('Trainer added:', this.trainer);
        this.router.navigate(['/admin-space/manage-trainers']);
      });
    } else {
      console.error('Please fill out all required fields.');
    }
  }
}
