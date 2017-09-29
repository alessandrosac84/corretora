import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: 'app/views/menu/menu.component.html',
	
	directives: [ ROUTER_DIRECTIVES ]
})
export class MenuComponent implements OnInit {


	constructor() {
	}

	ngOnInit() {
		
	}
}