import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router   } from '@angular/router';
import { Envoie } from '../model/envoie.model';
import { EnvoieService } from '../services/envoie.service';
 
@Component({
  selector: 'app-update-envoie',
  templateUrl: './update-envoie.component.html',
  styles: [
  ]
})
export class UpdateEnvoieComponent implements OnInit {
currentEnvoie = new Envoie();
  router: any;


  constructor(private activatedRoute: ActivatedRoute,
             
              private envoieService: EnvoieService) { }

  ngOnInit(): void {

   // console.log(this.activatedRoute.snapshot.params.id);
   
   this.currentEnvoie = this.envoieService.
   consulterEnvoie(this.activatedRoute.snapshot.params.id);
   console.log(this.currentEnvoie);
  }

  updateEnvoie(){


   this.envoieService.updateEnvoie(this.currentEnvoie);
   this.router.navigate(["envoie"]);

  }

}
