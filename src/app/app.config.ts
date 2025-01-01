import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { froutes } from './formations/formations-routing.module';
import { aroutes } from './admin-space/admin-space-routing.module';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([...routes,...froutes,...aroutes])],
  
};
