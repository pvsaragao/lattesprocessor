import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PesquisadoresComponent } from './pesquisadores/pesquisadores.component';
import { PesquisadoresService } from './pesquisadores/pesquisadores.service';

import { QualisComponent } from './qualis/qualis.component'
import { QualisService } from './qualis/qualis.service';

import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioService } from './relatorio/relatorio.service';

// add project imports

@NgModule({
  declarations: [
    AppComponent,
    PesquisadoresComponent,
    QualisComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'pesquisadores',
        component: PesquisadoresComponent
      },
      {
        path: 'qualis',
        component: QualisComponent
      },
      {
        path: 'relatorios',
        component: RelatorioComponent
      }
    ]), BrowserAnimationsModule
  ],
  providers: [PesquisadoresService, QualisService, RelatorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }