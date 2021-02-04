import { Injectable } from '@angular/core';
import { Envoie } from '../model/envoie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  apiURL: string = 'http://localhost:8094/envoies/';
  envoies!: Envoie[];
  consulterEnvoie: any;
  updateEnvoie: any;

  

  constructor(private http : HttpClient) {

    /*
    this.envoies = [

      {nomEmetteur : "gueye", prenomEmetteur : "Mountakha", numEmetteur : 775451428, montant : 250000, dateEnvoie : new Date ("01/22/2021"), nomRecepteur : "gueye", prenomRecepteur : "ahmed", cniRecepteur : 1596199801365, numRecepteur : 779632545},
      {nomEmetteur : "fall", prenomEmetteur : "ibrahima", numEmetteur : 775247898, montant : 150000, dateEnvoie : new Date ("01/22/2021"), nomRecepteur : "sow", prenomRecepteur : "ameth", cniRecepteur : 1596200001224, numRecepteur : 773548965},
      {nomEmetteur : "diallo", prenomEmetteur : "mamadou", numEmetteur : 775455487, montant : 3000000, dateEnvoie : new Date ("01/22/2021"), nomRecepteur : "gaye", prenomRecepteur : "mansor", cniRecepteur : 1596200354963, numRecepteur : 785472548}

     ];*/
   }

   listeEnvoie(): Observable<Envoie[]>{

    return this.http.get<Envoie[]>(this.apiURL);
   }

  
ajouterEnvoie( env: Envoie):Observable<Envoie>{ 
  console.log(env);
    
  return this.http.post<Envoie>(this.apiURL+"/add",env);
}

supprimerEnvoie(env : Envoie){

 // supprimer l'envoie env du tableau envoies
 

}

}
