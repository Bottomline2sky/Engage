import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { CompComponent } from './comp/comp.component';
import { DloginComponent } from './dev/dlogin/dlogin.component';
import { CloginComponent } from './comp/clogin/clogin.component';
import { DheaderComponent } from './dev/dheader/dheader.component';
import { CheaderComponent } from './comp/cheader/cheader.component';
import { DprofileComponent } from './dev/dprofile/dprofile.component';
import { DjobsComponent } from './dev/djobs/djobs.component';
import { DnotificationComponent } from './dev/dnotification/dnotification.component';
import { DjobApplyComponent } from './dev/djobs/djob-apply/djob-apply.component';
import { CprofileComponent } from './comp/cprofile/cprofile.component';
import { CjobsComponent } from './comp/cjobs/cjobs.component';
import { CselectionComponent } from './comp/cselection/cselection.component';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    CompComponent,
    DloginComponent,
    CloginComponent,
    DheaderComponent,
    CheaderComponent,
    DprofileComponent,
    DjobsComponent,
    DnotificationComponent,
    DjobApplyComponent,
    CprofileComponent,
    CjobsComponent,
    CselectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
