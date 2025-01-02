export interface Trainer {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone?: string;
    specialization: string;
    cin:number;
    cv:File;
    photo:ImageData
  }
  