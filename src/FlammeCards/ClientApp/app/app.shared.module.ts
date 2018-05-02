import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

import { FlammeComponent } from './components/flamme/flamme.component';
import { FlammeColorComponent } from './components/flamme-color/flamme-color.component';
 

@NgModule({
    declarations: [
        AppComponent,
        FlammeComponent,
        FlammeColorComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'flamme', pathMatch: 'full' },
            { path: 'flamme', component: FlammeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
