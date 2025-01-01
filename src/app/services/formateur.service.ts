import { Injectable } from "@angular/core";
import { Trainer } from "../model/trainer";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  trainers: Trainer[] = [
    { id: 1, nom: 'Boolares', prenom: 'Loujayn', email: 'l.b@gmail.com', specialization: 'économie' },
    { id: 2, nom: 'Dhrif', prenom: 'Hatem', email: 'Hatem.D@iset-r.tn.com', specialization: 'électrique' },
    { id: 3, nom: 'Laarousi', prenom: 'Latifa', email: 'Latifa.Laa@yahoo.fr', specialization: 'gestion' },
    { id: 4, nom: 'Bouajaja', prenom: 'Mariem', email: 'Mariem.Bjj@hotmail.fr', specialization: 'informatique' },
    { id: 5, nom: 'Landolsi', prenom: 'Ahmed', email: 'Landolsi.A@iset-r.tn.com', specialization: 'mécanique' },
    { id: 6, nom: 'Hattab', prenom: 'Ismail', email: 'Is.H@gmail.com', specialization: 'technique' },
  ];

  getTrainers(): Observable<Trainer[]> {
    return of(this.trainers);
  }

  getTrainerById(id: number): Observable<Trainer | undefined> {
    return of(this.trainers.find((trainer) => trainer.id === id));
  }

  addTrainer(trainer: Trainer): Observable<Trainer> {
    this.trainers.push(trainer);
    return of(trainer);
  }

  updateTrainer(id: number, updatedTrainer: Trainer): Observable<void> {
    const index = this.trainers.findIndex((trainer) => trainer.id === id);
    if (index !== -1) {
      this.trainers[index] = updatedTrainer;
    }
    return of();
  }

  deleteTrainer(id: number): Observable<void> {
    const index = this.trainers.findIndex(trainer => trainer.id === id);
    if (index !== -1) {
      this.trainers.splice(index, 1); 
    }
    return of();
  }
}
