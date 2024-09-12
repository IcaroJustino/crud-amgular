import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitacoesListComponent } from './solicitacoes-list/solicitacoes-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SolicitacoesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empresa-solicitacoes';
}
