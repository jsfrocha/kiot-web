import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { EfficiencyComponent } from './efficiency/efficiency.component';
import { EnergyComponent } from './energy/energy.component';
import { ContractComponent } from './contract/contract.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { DashboardState } from "./dashboard.state";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    EfficiencyComponent,
    EnergyComponent,
    ContractComponent
  ],
  providers: [
    DashboardState
  ]
})
export class DashboardModule {}
