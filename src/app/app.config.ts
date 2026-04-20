import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(FormsModule),
    provideRouter(routes)
  ]
};
