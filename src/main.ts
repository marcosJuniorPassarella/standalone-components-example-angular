import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { AppRoutingModule } from "./app/app-routing.module";

if (environment.production) {
  enableProdMode();
}

// provê o BrowsersModule para a aplicação, tirando a necessidade de importá-lo
bootstrapApplication(AppComponent, {
  // torna o app component ciente das rotas da aplicação
  providers: [importProvidersFrom(AppRoutingModule)],
});
