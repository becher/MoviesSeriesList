import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/navigation/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './interceptor/loader-interceptor.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
