import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  formations: Formation[] = [
   {id:1, titre: 'Technologies Informatique', description: 'Développement logiciel, cybersécurité, etc.', chargeHoraire: 40 },
    {id:2, titre: 'Mécanique et Maintenance', description: 'Maintenance des machines industrielles, génie mécanique, etc.', chargeHoraire: 40 },
    {id:3, titre: 'Électricité et Électronique', description: 'Systèmes électriques, circuits électroniques, etc.', chargeHoraire: 40},
    {id:4, titre: 'Gestion et Administration', description: 'Marketing, gestion des affaires, gestion financière, etc.', chargeHoraire: 40},
    {id:5, titre: 'Économie et Finance', description: 'Microéconomie, macroéconomie, économie internationale, etc.',  chargeHoraire: 40},
    {id:6, titre: 'Techniques de Production', description: 'Gestion de la production, gestion de la chaîne logistique, etc.',  chargeHoraire: 40 }
  
  ];

  getAllFormations(): Observable<Formation[]> {
    return of(this.formations);
  }

  getFormationById(id: number): Formation | undefined {
    return this.formations.find((formation) => formation.id === id);
  }

  updateFormation(id: number, updatedFormation: Formation): void {
    const index = this.formations.findIndex((formation) => formation.id === id);
    if (index !== -1) {
      this.formations[index] = updatedFormation;
    } else {
      console.error('Formation not found with ID:', id);
    }
  }
private formationsSubject = new BehaviorSubject<Formation[]>(this.formations);
  addFormation(formation: Formation): Observable<Formation> {
    const maxId = this.formations.length
      ? Math.max(...this.formations.map(f => f.id))
      : 0;
    formation.id = formation.id || maxId + 1;
  
    this.formations.push(formation);
    this.formationsSubject.next([...this.formations]);
    return of(formation);
  }

  deleteFormation(id: number): Observable<void> {
    const index = this.formations.findIndex((formation) => formation.id === id);
    if (index !== -1) {
      this.formations.splice(index, 1);
    }
    return of();
  }
}
