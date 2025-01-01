import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf,RouterModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent {
  formations = [
    {id:'info', title: 'Technologies Informatique', description: 'Développement logiciel, cybersécurité, etc.', category: 'Technologies informatique', link: 'details-informatique', participants:5,maxP:20},
    {id:'mec', title: 'Mécanique et Maintenance', description: 'Maintenance des machines industrielles, génie mécanique, etc.', category: 'Mécanique', link: 'details-mecanique', participants:20,maxP:20 },
    {id:'elec', title: 'Électricité et Électronique', description: 'Systèmes électriques, circuits électroniques, etc.', category: 'Électrique', link: 'details-electrique', participants:19,maxP:20 },
    {id:'gest', title: 'Gestion et Administration', description: 'Marketing, gestion des affaires, gestion financière, etc.', category: 'Gestion', link: 'details-gestion', participants:16,maxP:40 },
    {id:'eco', title: 'Économie et Finance', description: 'Microéconomie, macroéconomie, économie internationale, etc.', category: 'Économie', link: 'details-economie', participants:31,maxP:32 },
    {id:'tech', title: 'Techniques de Production', description: 'Gestion de la production, gestion de la chaîne logistique, etc.', category: 'Technique', link: 'details-technique', participants:15,maxP:18 }
  ];

  filteredFormations = this.formations;

  searchFormations(): void {
    const query = (document.getElementById('search') as HTMLInputElement).value.toLowerCase();
    this.filteredFormations = this.formations.filter(f =>
      f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query) || f.category.toLowerCase().includes(query)
    );
  }
  incrementParticipants(formationId: string): void {
    const formation = this.formations.find(f => f.id === formationId);
    if (formation && formation.participants < formation.maxP) {
      formation.participants++;
    }
    
    console.error(formation?.participants)
  }

  getParticipants(formationId: string){
    const formation = this.formations.find(f => f.id === formationId);
    return formation?.participants;
  }
  getMaxP(formationId: string){
    const formation = this.formations.find(f => f.id === formationId);
    return formation?.maxP;
  }
  
  isFull(formationId: string): boolean {
    const formation = this.formations.find(f => f.id === formationId);
    return formation ? formation.participants >= formation.maxP : false;
  }
}
