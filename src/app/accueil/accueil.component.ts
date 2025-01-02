import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Formation } from '../model/formation';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  formations:Formation[]=[];
  constructor(private formationService: FormationService, private router: Router) {}
  
    ngOnInit(): void {
      this.fetchFormations();
    }
  
    fetchFormations(): void {
      this.formationService.getAllFormations().subscribe((formation) => {
        this.formations = formation;
      });
    }
}
