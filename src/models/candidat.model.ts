

export interface Candidat {
    candidatId: number;
    electeurId: number;
    programmeId: number;
}

export interface Electeur {
    electeurId: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    lieuNaissance: string;
    sexe: string;
    adresse: string;
    telephone: string;
    email: string;
    profession: string;
    situationMatrimoniale: string;
    nombreEnfants: number;
    dateInscription: Date;
    dateModification: Date;
    dateSuppression: Date;
    candidatParraine: Candidat;
}

export interface Parrainage {
    parrainageId: number;
    candidat: Candidat[];
    electeur: Electeur[];
    dateFin: Date;
    dateDebut: Date;
}