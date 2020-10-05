import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Relatorio } from '../../../../common/relatorio';

@Injectable()
export class RelatorioService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    criar(relatorio: Relatorio): Observable<Relatorio> {
        return this.http.post<any>(this.taURL + "/aluno", relatorio, { headers: this.headers })
            .pipe(
                retry(2),
                map(res => {
                    if (res.success) { return res.body; } else {
                        throw new Error(res.failure);
                    }
                })
            );
    }

    atualizar(relatorio: number): Observable<Relatorio> {
        return this.http.put<any>(this.taURL + "/aluno/"+relatorio, { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return res.body; } else { throw new Error(res.failure); } })
        );
    }
    deletar(relatorio: number): Observable<string> {
        return this.http.delete<any>(this.taURL + "/aluno/" + relatorio, { headers: this.headers }).pipe(
            retry(2),
            map(res => { if (res.success) { return res.success; } else { return res.failure; } })
        );
    }

    getAlunos(): Observable<Relatorio[]> {
        return this.http.get<Relatorio[]>(this.taURL + "/alunos")
            .pipe(
                retry(2)
            );
    }

}