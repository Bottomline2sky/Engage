import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {JobSpecificService} from '../../jobServices/jobSpecific.service';
import {JobModel} from '../../jobServices/Job.model';
import {JobSpecificModel} from '../../jobServices/JobSpecific.model';

@Component({
  selector: 'app-jdetails',
  templateUrl: './jdetails.component.html',
  styleUrls: ['./jdetails.component.css']
})
export class JdetailsComponent implements OnInit {
        jid : string;
         jgeneralDetail: JobModel;
           jabAllDetail:  JobSpecificModel;
             isLoading = true;

  constructor(private  activatedRoute: ActivatedRoute, private jobSpecificService: JobSpecificService) { }

   ngOnInit(): void {
       this.jid = this.activatedRoute.snapshot.params['id'];
           this.jgeneralDetail = this.jobSpecificService.getJobDetail(this.jid);
           this.jobSpecificService.fetchJobDetails(this.jid).subscribe(res=>{
                  console.log(res);
                this.isLoading = false;
           })
      }



}
