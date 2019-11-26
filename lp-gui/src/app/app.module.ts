import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisadoresComponent } from './pesquisador/pesquisadores.component';
import { PesquisadorService } from './pesquisador/pesquisador.service';

// add project imports

@NgModule({
  
  declarations: [
    AppComponent,
    PesquisadoresComponent
    //,
    //MetasComponent,
    //AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'pesquisadores',
        component: PesquisadoresComponent
      }
      /*{
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      } */
    ])
  ],
  providers: [PesquisadorService],
  bootstrap: [AppComponent]

})
export class AppModule { }
