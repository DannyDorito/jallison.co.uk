import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
  standalone: false
} )
export class ProjectsComponent
{
  constructor( private projectsService: ProjectsService ) { }
}
