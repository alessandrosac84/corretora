import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


@Component({
  selector: 'meu-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">Corretora</a>
		</div>
		<div>
		  <ul class="nav navbar-nav">
		  	<li><a [routerLink]="['/aluno-listar']">Alunos</a></li>
		  	<li><a [routerLink]="['/logout']">Sair</a></li>
		  </ul>
		</div>
	  </div>
		</nav>
    <br /><br /><br />


<!--
		<button (click)="toggleMenu()" class="hamburger">
  		<span>toggle menu</span>
		</button>
		<h1>
			{{title}}
		</h1>
		
		<app-menu></app-menu> -->
    <router-outlet></router-outlet>
	`,
	styleUrls: ['/app/views/menu/menu.component.css'],
	directives: [ ROUTER_DIRECTIVES, MenuComponent ],
})
export class AppComponent {

title = 'app works!';
	toggleMenu() {
    
  }
}