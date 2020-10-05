import { Component, OnInit } from '@angular/core';
import { Relatorio } from '../../../../common/relatorio';
import { RelatorioService } from './relatorio.service';

@Component({
    selector: 'app-root',
    templateUrl: './relatorio.component.html',
    styleUrls: ['./relatorio.component.css']
})
export class AlunosComponent implements OnInit {

    relatorio: Relatorio = new Relatorio();
    relatorios: Relatorios[] = [];
    cpfduplicado: boolean = false;
    githubduplicado: boolean = false;

    constructor(private RelatorioService: RelatorioService) { }

    criarAluno(a: Aluno): void {
        this.alunoService.criar(a)
            .subscribe(
                ar => {
                    if (ar) {
                        this.alunos.push(ar);
                        this.aluno = new Aluno();
                    }
                },
                error => {
                    var type: number = error.message;
                    if (type == 1) {
                        this.cpfduplicado = true;
                    } else if (type == 2) {
                        this.githubduplicado = true;
                    } else {
                        this.cpfduplicado = true;
                        this.githubduplicado = true;
                    }

                }
            );

    }

    onMove(): void {
        this.cpfduplicado = false;
        this.githubduplicado = false;
    }

    ngOnInit(): void {
        this.alunoService.getAlunos()
            .subscribe(
                as => { this.alunos = as; },
                msg => { alert(msg.message); }
            );
    }

}