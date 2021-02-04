import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvoiesComponent } from './envoies/envoies.component';
import { AddEnvoieComponent } from './add-envoie/add-envoie.component';
import { UpdateEnvoieComponent} from './update-envoie/update-envoie.component';

const routes: Routes = [

  {path : "envoies", component : EnvoiesComponent},
  {path : "add-envoie", component : AddEnvoieComponent},
  {path: "", redirectTo : "envoies", pathMatch: "full" },
  {path: "updateEnvoie/:id", component: UpdateEnvoieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { } 
