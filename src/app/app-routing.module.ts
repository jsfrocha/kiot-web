import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account/account.component";
import {LandingComponent} from "./landing/landing.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./_guards/auth.guard";
import {NgModule} from "@angular/core";
import {CustomPreloadStrategy} from "./app.preload";

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: AccountComponent },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadStrategy })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RouterModule,
    AuthGuard,
    CustomPreloadStrategy
  ]
})
export class AppRoutingModule {}
