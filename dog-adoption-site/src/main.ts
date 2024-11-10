import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     HttpClientModule
//   ]
// }).catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//     providers: [
//         provideHttpClient(),
//         { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//     ]
// });
  