import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Grupo } from "../../../../common/grupo";
import { Pesquisador } from "../../../../common/pesquisador";

@Injectable()
export class GruposService {
    
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private lpURL = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getGrupos() {
        return this.http.get<Grupo[]>(this.lpURL + "/grupos")
            .pipe(
                retry(2)
            );
    }

    criar(grupo: Grupo): Observable<Grupo> {
        return this.http.post<any>(this.lpURL + "/grupos/grupo", JSON.stringify(grupo), {headers: this.headers})
            .pipe(
                retry(2),
                map( res => {if (res.success) {return grupo;} else {return null;}})
            );
    }

}