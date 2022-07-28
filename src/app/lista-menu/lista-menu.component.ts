import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListaMenuComponent implements OnInit {

  @Output() public sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () =>{
  
    this.sidenavClose.emit();
  }

}
