import { Component, OnInit } from '@angular/core';
import { Envoie } from '../model/envoie.model';
import { EnvoieService } from '../services/envoie.service';
import { Router } from '@angular/router';
import { Emetteur } from '../model/emetteur.model';
import { Recepteur } from '../model/recepteur.model';

@Component({
  selector: 'app-add-envoie',
  templateUrl: './add-envoie.component.html'
  
})
export class AddEnvoieComponent implements OnInit {

  newEnvoie = new Envoie();

  message= " envoie avec succes";

  constructor(private envoieService : EnvoieService,
              private router :Router) { }

  ngOnInit(): void {
    
    this.newEnvoie = new Envoie()

    this.newEnvoie.emetteur = new Emetteur();
    this.newEnvoie.recepteur = new Recepteur();
  }

  addEnvoie() {

    
  this.envoieService.ajouterEnvoie(this.newEnvoie).subscribe(env => {
    console.log(env);  
   // console.log(this.message);


      });

      this.router.navigate(['envoies']).then(() => {    
        window.location.reload();
          });
      }

    }   