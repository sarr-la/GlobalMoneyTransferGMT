import { Component, OnInit } from '@angular/core';
import { Envoie } from '../model/envoie.model';
import { EnvoieService } from '../services/envoie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoies',
  templateUrl: './envoies.component.html'
  
})
export class EnvoiesComponent implements OnInit {

  envoies!: Envoie[];

  constructor(private envoieService : EnvoieService,
              private router :Router)     {  


    // this.envoies = envoieService.listeEnvoie();

  }

  ngOnInit(): void {

this.envoieService.listeEnvoie().subscribe(envs =>{
 // console.log(envs);
  this.envoies = envs;
  });

}

  supprimerEnvoie(env : Envoie)
  {

   // console.log(env);
//this.envoieService.supprimerEnvoie(env);


let conf = confirm("Etes-vous sur ?");
if (conf)
    this.envoieService.supprimerEnvoie(env);

  }

}
