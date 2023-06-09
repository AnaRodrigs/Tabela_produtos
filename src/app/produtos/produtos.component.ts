import { Component, OnInit } from '@angular/core';
import { produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos : produto[]=[];

   constructor (private produtoService: ProdutoService){}
   ngOnInit(): void {
    this.loadClients();
   }
   loadClients() {
     this.produtoService.getProdutos (). subscribe(
       {
         next : data => this.produtos = data
       }
     );
   }
 }
