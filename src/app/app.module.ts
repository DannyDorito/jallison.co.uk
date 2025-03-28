import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

// services
import { HomeService } from './home/home.service';

@NgModule( {
    declarations: [
        // components
        AppComponent,
        NotFoundComponent,
        HomeComponent,
        ContactComponent,
        ProjectsComponent,
        SkillsComponent,
        EducationComponent,
        ExperienceComponent
    ],
    bootstrap: [ AppComponent ], imports: [ FormsModule,
        BrowserModule,
        // routing
        AppRoutingModule,
        ServiceWorkerModule.register( 'ngsw-worker.js', { enabled: environment.production } ) ], providers: [
            // services
            HomeService,
            provideHttpClient( withInterceptorsFromDi() )
        ]
} )
export class AppModule { }
