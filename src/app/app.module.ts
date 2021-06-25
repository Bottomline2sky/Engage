import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { CompComponent } from './comp/comp.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheaderComponent } from './comp/cheader/cheader.component';
import { DjobsComponent } from './dev/djobs/djobs.component';
import { CprofileComponent } from './comp/cprofile/cprofile.component';
import { CjobsComponent } from './comp/cjobs/cjobs.component';
import { CselectionComponent } from './comp/cselection/cselection.component';
import { HomeComponent } from './home/home.component';
import {CloginComponent} from './auth/clogin/clogin.component';
import { DloginComponent } from './auth/dlogin/dlogin.component';
import { DsearchComponent } from './dev/dsearch/dsearch.component';
import { DprofileComponent} from './dev/dsection/dprofile/dprofile.component';
import { DsectionComponent } from './dev/dsection/dsection.component';
import { DuprofileComponent } from './dev/dsection/duprofile/duprofile.component';
import { PastresultComponent } from './dev/dsection/pastresult/pastresult.component';
import { NotificationComponent } from './dev/dsection/notification/notification.component';
import { MessagingComponent } from './dev/dsection/messaging/messaging.component';
import { JdescComponent } from './dev/djobs/jdesc/jdesc.component';

@NgModule({
    declarations: [
        AppComponent,
        DevComponent,
        CompComponent,
        CheaderComponent,
        DjobsComponent,
        CprofileComponent,
        CjobsComponent,
        CselectionComponent,
        HomeComponent,
        CloginComponent,
        DloginComponent,
        DsearchComponent,
        DsectionComponent,
        DuprofileComponent,
        PastresultComponent,
        NotificationComponent,
        MessagingComponent,
        JdescComponent,
        DprofileComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
