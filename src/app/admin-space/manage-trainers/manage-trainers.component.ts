import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/formateur.service';
import { Router, RouterLink } from '@angular/router';
import { Trainer } from '../../model/trainer';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-manage-trainers',
  templateUrl: './manage-trainers.component.html',
  styleUrls: ['./manage-trainers.component.css'],
  imports: [RouterLink, NgFor, NgIf]
})
export class ManageTrainersComponent implements OnInit {
  trainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrainers();
  }

  fetchTrainers(): void {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

  deleteTrainer(id: number): void {
    this.trainerService.deleteTrainer(id).subscribe(
      () => {
        console.log('Trainer deleted');
        this.fetchTrainers(); 
      },
      (error) => {
        console.error('Error deleting trainer', error);
      }
    );
  }
}
