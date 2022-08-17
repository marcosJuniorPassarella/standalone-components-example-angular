import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

// provê o BrowsersModule para a aplicação, tirando a necessidade de importá-lo
bootstrapApplication(AppComponent);
