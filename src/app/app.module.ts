import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarlComponent } from './sidebarl/sidebarl.component';
import { SidebarrComponent } from './sidebarr/sidebarr.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VitalityComponent } from './vitality/vitality.component';
import { VitalityItemComponent } from './vitality-item/vitality-item.component';
import { ServicesComponent } from './services/services.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { OtpComponent } from './otp/otp.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateItemComponent } from './template-item/template-item.component';
import { TraceComponent } from './trace/trace.component';
import { TraceItemComponent } from './trace-item/trace-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigcntrlComponent } from './configcntrl/configcntrl.component';
import { ConfigItemComponent } from './config-item/config-item.component';
import { ServerSelectComponent } from './server-select/server-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarlComponent,
    SidebarrComponent,
    LoginComponent,
    DashboardComponent,
    VitalityComponent,
    VitalityItemComponent,
    ServicesComponent,
    ServiceItemComponent,
    OtpComponent,
    TemplatesComponent,
    TemplateItemComponent,
    TraceComponent,
    TraceItemComponent,
    PageNotFoundComponent,
    ConfigcntrlComponent,
    ConfigItemComponent,
    ServerSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
