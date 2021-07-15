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
    this.jobDesc = { ...this.djobsGeneralService.getJobWithId(place)};
    console.log(this.jobDesc.jdeadline)
    console.log(new Date(+this.jobDesc.jdeadline).getDate());
    this.jobDesc.jdeadline  =   new Date(this.jobDesc.jdeadline).getDate().toString();

    console.log(new Date(+this.jobDesc.jdeadline).getDate());
  }

  toApply() {
    this.djobsGeneralService.applyToTheJob(this.jobDesc.jid).subscribe(res=>{
      console.log(res);
      alert("applid sucesjgk");
    }, error=>{
      console.log(error)
    })
  }
}
