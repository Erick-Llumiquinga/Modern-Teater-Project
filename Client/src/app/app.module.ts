import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HttpModule } from '@angular/http';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LoginComponent } from './login/login.component';
import { ReservasComponent } from './reservas/reservas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './register/register.component';
import { SalasComponent } from './contenido/salas/salas.component';
import { HorariosComponent } from './contenido/horarios/horarios.component';
import { ObrasComponent } from './contenido/obras/obras.component';



const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("974344496327-frdvgm33d82243jijc1rmtlq5kmn8kbk.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("289526295025144")
  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AdminComponent,
    ContenidoComponent,
    LoginComponent,
    ReservasComponent,
    PerfilComponent,
    RegisterComponent,
    SalasComponent,
    HorariosComponent,
    ObrasComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,

  ],
  providers: [
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
