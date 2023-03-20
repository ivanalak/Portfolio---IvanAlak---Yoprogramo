import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONETSComponent } from './componets/componets.component';
import { AgregarComponent } from './componets/agregar/agregar.component';
import { EditarComponent } from './componets/editar/editar.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { InicioEduComponent } from './COMPONENTS_EDU/inicio-edu/inicio-edu.component';
import { EditarEduComponent } from './COMPONENTS_EDU/editar-edu/editar-edu.component';
import { AgregarEduComponent } from './COMPONENTS_EDU/agregar-edu/agregar-edu.component';
import { InicioExpComponent } from './COMPONENTS_EXP/inicio-exp/inicio-exp.component';
import { EditarExpComponent } from './COMPONENTS_EXP/editar-exp/editar-exp.component';
import { AgregarExpComponent } from './COMPONENTS_EXP/agregar-exp/agregar-exp.component';
import { InicioHerComponent } from './COMPONENTS_HER/inicio-her/inicio-her.component';
import { EditarHerComponent } from './COMPONENTS_HER/editar-her/editar-her.component';
import { AgregarHerComponent } from './COMPONENTS_HER/agregar-her/agregar-her.component';
import { InicioProComponent } from './COMPONENTS_PRO/inicio-pro/inicio-pro.component';
import { EditarProComponent } from './COMPONENTS_PRO/editar-pro/editar-pro.component';
import { AgregarProComponent } from './COMPONENTS_PRO/agregar-pro/agregar-pro.component';
import { COMPONENTSEncabezadoComponent } from './components-encabezado/components-encabezado.component';
import { COMPONENTSContactoComponent } from './components-contacto/components-contacto.component';
import { ComponentsLoginComponent } from './components-login/components-login.component';
import { ComponentsSignupComponent } from './components-signup/components-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashbpardComponent } from './user/user-dashbpard/user-dashbpard.component';
import { PortadaComponent } from './portada/portada.component';
import { PortadaEduComponent } from './portada-edu/portada-edu.component';
import { PortadaExpComponent } from './portada-exp/portada-exp.component';
import { PortadaProComponent } from './portada-pro/portada-pro.component';
import { PortadaHerComponent } from './portada-her/portada-her.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONETSComponent,
    AgregarComponent,
    EditarComponent,
    InicioComponent,
    NavbarComponent,
    InicioEduComponent,
    EditarEduComponent,
    AgregarEduComponent,
    InicioExpComponent,
    EditarExpComponent,
    AgregarExpComponent,
    InicioHerComponent,
    EditarHerComponent,
    AgregarHerComponent,
    InicioProComponent,
    EditarProComponent,
    AgregarProComponent,
    COMPONENTSEncabezadoComponent,
    COMPONENTSContactoComponent,
    ComponentsLoginComponent,
    ComponentsSignupComponent,
    DashboardComponent,
    UserDashbpardComponent,
    PortadaComponent,
    PortadaEduComponent,
    PortadaExpComponent,
    PortadaProComponent,
    PortadaHerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }


