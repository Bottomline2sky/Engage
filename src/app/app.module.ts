import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { CompComponent } from './comp/comp.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DjobsComponent } from './dev/djobs/djobs.component';

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
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CpostComponent } from './comp/cpost/cpost.component';
import { NpostComponent } from './comp/cpost/npost/npost.component';
import { CgeneralComponent } from './comp/cgeneral/cgeneral.component';
import { NjobComponent } from './comp/cgeneral/njob/njob.component';
import { PjobsComponent } from './comp/cgeneral/pjobs/pjobs.component';



@NgModule({
    declarations: [
        AppComponent,
        DevComponent,
        CompComponent,
        DjobsComponent,
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
        DprofileComponent,
        CpostComponent,
        NpostComponent,
        CgeneralComponent,
        NjobComponent,
        PjobsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
     AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
