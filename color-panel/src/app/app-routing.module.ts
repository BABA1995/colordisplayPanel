import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputpanelComponent } from 'src/components/inputpanel/inputpanel.component';
const routes: Routes = [
  { path: '', redirectTo: '/colordisplay', pathMatch: 'full' },
  { path: 'colordisplay', component: InputpanelComponent },
  { path: '**', redirectTo: '/colordisplay', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
