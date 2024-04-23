
export interface ElecteurP {
    tentative: number;
    cni : string;
    identifiant: number;
    probleme: string;
}

export interface Electeur {
    cni: string;
    numero_electeur: string;
    nom: string;
    prenom: string;
    date_naissance: string;
    lieu_naissance: string;
    sexe: string;
    bureau_vote: string;
}

export interface Personnel {
    cni: string;
    nom: string;
    prenom: string;
}

export interface Parrainage {
    date_debut: string;
    date_fin: string;
    annee_electorale: string;
    liste_electeurs: Electeur[];
}

export interface Candidat {
    compte: string;
    profil_electeur: Electeur;
    parrains: Electeur[];
    periodes_parrainage: Parrainage;
    programme: string;
    photo: string;
    partie_politique: string;
    slogan: string;
}


export interface Historique {
    date_debut: string;
    date_fin: string;
    annee_electorale: string;
    nombre_candidats: number;
    nombre_electeurs: number;
    nombre_parrains: number;
}