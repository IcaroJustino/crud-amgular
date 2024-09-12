import { Component } from '@angular/core';
import { SolicitacaoDetalhesComponent } from '../solicitacao-detalhes/solicitacao-detalhes.component';
import { CommonModule } from '@angular/common';

interface Solicitacao {
  id: number;
  nome: string;
  descricao: string;
  detalhes: string;
}

@Component({
  selector: 'app-solicitacoes-list',
  standalone: true,
  imports: [SolicitacaoDetalhesComponent, CommonModule],
  templateUrl: './solicitacoes-list.component.html',
  styleUrls: ['./solicitacoes-list.component.css']
})
export class SolicitacoesListComponent {
  solicitacoes: Solicitacao[] = [
    { id: 1, nome: 'Empresa A', descricao: 'Descrição A', detalhes: 'Detalhes A' },
    { id: 2, nome: 'Empresa B', descricao: 'Descrição B', detalhes: 'Detalhes B' },
    // Adicione mais solicitações conforme necessário
  ];
  solicitacaoSelecionada: Solicitacao | null = null;

  selecionarSolicitacao(solicitacao: Solicitacao): void {
    this.solicitacaoSelecionada = solicitacao;
  }
}
