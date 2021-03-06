import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/http/token-interceptor';
import { ErrorInterceptor } from './auth/http/error-interceptor';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ManageComponent } from './manage/manage.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { UserWorkersComponent } from './admin/user-workers/user-workers.component';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreInfoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResourceComponent,
    ManageComponent,
    ConfigurationComponent,
    UserWorkersComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
