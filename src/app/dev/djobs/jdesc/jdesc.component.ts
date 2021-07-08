import { Component, OnInit } from '@angular/core';
import {DJobModel} from '../djobsService/DJob.model';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DjobsGeneralService} from '../djobsService/djobsGeneral.service';

@Component({
  selector: 'app-jdesc',
  templateUrl: './jdesc.component.html',
  styleUrls: ['./jdesc.component.css']
})
export class JdescComponent implements OnInit {
      jobDesc: DJobModel;
   constructor(private activatedRoute: ActivatedRoute,
               private djobsGeneralService: DjobsGeneralService) { }

   ngOnInit(): void {
           const place = +this.activatedRoute.snapshot.params['id'];
            this.jobDesc = this.djobsGeneralService.getJobWithId(place);
             console.log(this.jobDesc)
    }

}
