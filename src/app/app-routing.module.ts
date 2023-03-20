import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './componets/inicio/inicio.component';
import { EditarComponent } from './componets/editar/editar.component';
import { AgregarComponent } from './componets/agregar/agregar.component';
import { InicioEduComponent } from './COMPONENTS_EDU/inicio-edu/inicio-edu.component';
import { EditarEduComponent } from './COMPONENTS_EDU/editar-edu/editar-edu.component';
import { AgregarEduComponent } from './COMPONENTS_EDU/agregar-edu/agregar-edu.component';
import { AppComponent } from './app.component';
import { InicioExpComponent } from './COMPONENTS_EXP/inicio-exp/inicio-exp.component';
import { EditarExpComponent } from './COMPONENTS_EXP/editar-exp/editar-exp.component';
import { AgregarExpComponent } from './COMPONENTS_EXP/agregar-exp/agregar-exp.component';
import { InicioHerComponent } from './COMPONENTS_HER/inicio-her/inicio-her.component';
import { EditarHerComponent } from './COMPONENTS_HER/editar-her/editar-her.component';
import { AgregarHerComponent } from './COMPONENTS_HER/agregar-her/agregar-her.component';
import { InicioProComponent } from './COMPONENTS_PRO/inicio-pro/inicio-pro.component';
import { EditarProComponent } from './COMPONENTS_PRO/editar-pro/editar-pro.component';
import { AgregarProComponent } from './COMPONENTS_PRO/agregar-pro/agregar-pro.component';
import { COMPONENTSContactoComponent } from './components-contacto/components-contacto.component';
import { ComponentsSignupComponent } from './components-signup/components-signup.component';
import { ComponentsLoginComponent } from './components-login/components-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashbpardComponent } from './user/user-dashbpard/user-dashbpard.component';
import { NormalGuard } from './service/normal.guard';

const routes: Routes = [

 //{path:'', component:InicioComponent, pathMatch: 'full'}, 

  {path:'inicio', component: InicioComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'agregar', component: AgregarComponent},

  {path:'inicioEdu', component: InicioEduComponent},
  {path:'editarEdu/:id', component: EditarEduComponent},
  {path:'agregarEdu', component: AgregarEduComponent},

  {path:'inicioExp', component: InicioExpComponent},
  {path:'editarExp/:id', component: EditarExpComponent},
  {path:'agregarExp', component: AgregarExpComponent},

  {path:'inicioHer', component: InicioHerComponent},
  {path:'editarHer/:id', component: EditarHerComponent},
  {path:'agregarHer', component: AgregarHerComponent},

  {path:'inicioPro', component: InicioProComponent},
  {path:'editarPro/:id', component: EditarProComponent},
  {path:'agregarPro', component: AgregarProComponent},

  {path:'contacto', component:COMPONENTSContactoComponent},

  {path:'signup', component:ComponentsSignupComponent, pathMatch: 'full'},

  {path:'login', component:ComponentsLoginComponent, pathMatch: 'full'},

  {path: 'admin', component:DashboardComponent, pathMatch: 'full'},

  {path: 'user-dashboard', component:UserDashbpardComponent, pathMatch: 'full', canActivate:[NormalGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
