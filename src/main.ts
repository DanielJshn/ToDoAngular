import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; 
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) 
  ],
}).catch((err) => console.error(err));