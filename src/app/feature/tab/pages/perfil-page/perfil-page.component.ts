import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss'],
})
export class PerfilPageComponent {


  constructor(
    public readonly _location: Location
  ) { }

  back() {
    this._location.back();
  }
}
