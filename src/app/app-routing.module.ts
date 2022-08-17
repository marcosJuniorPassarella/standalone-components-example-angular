import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Route[] = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "about",
    // sintaxe utilizada apenas para lazy loading de standalone components
    loadComponent: () =>
      import("./about/about.component").then((mod) => mod.AboutComponent),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard-routes").then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
