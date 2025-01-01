import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from '../../../services/formateur.service';
import { Trainer } from '../../../model/trainer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-trainer',
  templateUrl: './modify-trainer.component.html',
  styleUrls: ['./modify-trainer.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ModifyTrainerComponent implements OnInit {
  trainer: Trainer = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    specialization: '',
    telephone: ''
  };

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const trainerId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchTrainerDetails(trainerId);
  }

  fetchTrainerDetails(id: number): void {
    this.trainerService.getTrainerById(id).subscribe(
      (trainer: Trainer) => {
        this.trainer = trainer;
      },
      (error) => {
        console.error('Error fetching trainer details', error);
      }
    );
  }

  onSubmit(): void {
    if (this.trainer.id !== null) {
      this.trainerService.updateTrainer(this.trainer.id, this.trainer);
      console.log('Trainer updated:', this.trainer);
      this.router.navigate(['/admin-space/manage-trainers']);
    } else {
      console.error('Trainer ID is null. Cannot update trainer.');
    }
  }
}
