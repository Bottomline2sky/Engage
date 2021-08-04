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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CpostComponent } from './comp/cpost/cpost.component';
import { NpostComponent } from './comp/cpost/npost/npost.component';
import { CgeneralComponent } from './comp/cgeneral/cgeneral.component';
import { NjobComponent } from './comp/cgeneral/njob/njob.component';
import { PjobsComponent } from './comp/cgeneral/pjobs/pjobs.component';
import {DauthGuardService} from './auth/dlogin/dauth-guard.service';
import {DuprofileDeactivateService} from './dev/dsection/duprofile/duprofile-deactivate.service';
import {allInterceptors} from './allInterceptors.mentions';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import {DevInterceptorService} from './dev/dev-interceptor.service';
import { CompInterceptorService } from './comp/comp-interceptor.service';
import { CdisplayComponent } from './comp/cdisplay/cdisplay.component';
import { CaboutComponent } from './comp/cdisplay/cabout/cabout.component';
import { CinfoComponent } from './comp/cdisplay/cinfo/cinfo.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { ChatDisplayComponent } from './dev/dsection/messaging/chat-display/chat-display.component';




// const config: SocketIoConfig ={ url: 'http://localhost:3001', options: {}};

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
        PjobsComponent,
        LoaderSpinnerComponent,
        CdisplayComponent,
        CaboutComponent,
        CinfoComponent,
        ChatDisplayComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
     AppRoutingModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config)

  ],
  providers: [DauthGuardService, DuprofileDeactivateService, [{provide: HTTP_INTERCEPTORS, useClass: DevInterceptorService, multi:true}
       , {provide: HTTP_INTERCEPTORS, useClass: CompInterceptorService, multi: true }]
  ],
  bootstrap: [AppComponent]
})












export class AppModule { }
