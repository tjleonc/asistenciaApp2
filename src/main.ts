import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app'; // Importación directa de Firebase

if (environment.production) {
  enableProdMode();
}

// Inicialización de Firebase fuera del NgModule
initializeApp(environment.firebase);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));  