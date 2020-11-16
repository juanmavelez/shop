import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { environment } from '@environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import * as Sentry from '@sentry/browser';
import * as SentryAngular from '@sentry/angular';

if (environment.production) {
  Sentry.init({
    dsn:
      'https://c4f04acf8e58468a831bbf9f1e5a375d@o477120.ingest.sentry.io/5517558',
  });
}

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: SentryAngular.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
