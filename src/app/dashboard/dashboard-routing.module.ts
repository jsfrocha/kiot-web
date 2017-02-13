import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {HomeComponent} from "./home/home.component";
import {EfficiencyComponent} from "./efficiency/efficiency.component";
import {EnergyComponent} from "./energy/energy.component";
import {ContractComponent} from "./contract/contract.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'efficiency', component: EfficiencyComponent },
      { path: 'energy', component: EnergyComponent },
      { path: 'patients', component: ContractComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
