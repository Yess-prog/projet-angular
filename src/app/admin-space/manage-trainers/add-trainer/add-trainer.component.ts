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
    cv: null,
    photo: null,
    telephone: '',
    cin: 0
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
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (event.target.id === 'cv') {
          this.trainer.cv = reader.result as unknown as File; 
        } else if (event.target.id === 'photo') {
          this.trainer.photo = reader.result as unknown as ImageData; 
        }
      };
    }
  }
  
}
