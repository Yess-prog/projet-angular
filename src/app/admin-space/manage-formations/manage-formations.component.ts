import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../model/formation';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-manage-formations',
  templateUrl: './manage-formations.component.html',
  styleUrls: ['./manage-formations.component.css'],
  imports:[RouterLink,NgIf,NgFor]
})
export class ManageFormationsComponent implements OnInit {
  formations: Formation[] = [];

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getAllFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
    });
  }

  deleteFormation(id: number): void {
    this.formationService.deleteFormation(id).subscribe(
      () => {
        console.log('Formation deleted');
        this.getFormations(); // Re-fetch the list after deletion
      },
      (error) => {
        console.error('Error deleting formation', error);
      }
    );
  }
}
