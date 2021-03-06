import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component'; 
import { GraficosComponent } from './components/graficos/graficos.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { MenuComponent } from './components/menu/menu.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    IdiomasComponent,
    AcercaComponent,
    LoginComponent,
    GraficosComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    EncabezadoComponent,
    MenuComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      //set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 2,
      outerStrokeColor: "#8c7b75",
      innerStrokeColor: "#bcaaa4", 
      animationDuration: 300
    }),
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
