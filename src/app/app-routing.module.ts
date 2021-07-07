import {RouterModule, Routes} from '@angular/router';
import {DevComponent} from './dev/dev.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {DprofileComponent} from './dev/dsection/dprofile/dprofile.component';
import {DuprofileComponent} from './dev/dsection/duprofile/duprofile.component';
import {MessagingComponent} from './dev/dsection/messaging/messaging.component';
import {NotificationComponent} from './dev/dsection/notification/notification.component';
import {PastresultComponent} from './dev/dsection/pastresult/pastresult.component';
import {DsectionComponent} from './dev/dsection/dsection.component';
import {DjobsComponent} from './dev/djobs/djobs.component';
import {DsearchComponent} from './dev/dsearch/dsearch.component';
import {DloginComponent} from './auth/dlogin/dlogin.component';
import {CloginComponent} from './auth/clogin/clogin.component';
import {CompComponent} from './comp/comp.component';
import {CpostComponent} from './comp/cpost/cpost.component';
import {CgeneralComponent} from './comp/cgeneral/cgeneral.component';
import {NjobComponent} from './comp/cgeneral/njob/njob.component';
import {CinfoComponent} from './comp/cgeneral/cinfo/cinfo.component';
import {PjobsComponent} from './comp/cgeneral/pjobs/pjobs.component';
import {CmessagingComponent} from './comp/cgeneral/cmessaging/cmessaging.component';
import {DauthGuardService} from './auth/dlogin/dauth-guard.service';
import {DuprofileDeactivateService} from './dev/dsection/duprofile/duprofile-deactivate.service';
import {DlogInGuardService} from './dev/DlogIn-guard.service';
import {ClogInGuardService} from './comp/ClogIn-guard.service';


const routes : Routes = [
  {path: '' , component: HomeComponent, pathMatch: 'full'},
  {path: 'dev',  canActivate: [DlogInGuardService],component: DevComponent,
    children: [
      { path: '' , component: DsectionComponent ,
        children : [
          {path: '' , component: DprofileComponent , pathMatch: 'full'},
          {path: 'update-profile' , component: DuprofileComponent, canDeactivate: [DuprofileDeactivateService]},
          {path: 'messaging' , component:  MessagingComponent},
          {path: 'notification' , component: NotificationComponent},
          {path: 'past-result' , component: PastresultComponent}
        ]},
      {path: 'djobs' , component: DjobsComponent},
      {path: 'dsearch' ,component: DsearchComponent}
    ]},
  {path: 'dlogin' , component: DloginComponent},
  {path: 'clogin' ,component : CloginComponent},
  {path: 'comp' , canActivate: [ClogInGuardService],component: CompComponent,
    children : [
      {path: '' , component: CgeneralComponent,
       children:  [
         {path: '' ,component: CinfoComponent},
         {path: 'new-job', component: NjobComponent},
         {path: 'past-jobs' , component: PjobsComponent},
         {path: 'messaging' , component: CmessagingComponent}
       ]},
      {path: 'cpost' , component: CpostComponent}
    ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
