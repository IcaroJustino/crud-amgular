import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Solicitacao {
  id: number;
  nome: string;
  descricao: string;
  detalhes: string;
}

@Component({
  selector: 'app-solicitacao-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacao-detalhes.component.html',
  styleUrls: ['./solicitacao-detalhes.component.css']
})
export class SolicitacaoDetalhesComponent {
  @Input() solicitacao: Solicitacao | null = null;
}
