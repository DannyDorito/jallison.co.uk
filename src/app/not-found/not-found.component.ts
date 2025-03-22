import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component( {
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [ './not-found.component.css' ],
  standalone: false
} )
export class NotFoundComponent
{

  constructor( private location: Location ) { }
  back ()
  {
    this.location.back();
  }
}
