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
           jobAllDetail:  JobSpecificModel;
             isLoading = true;
               selectedAll = new Map();


  constructor(private  activatedRoute: ActivatedRoute, private jobSpecificService: JobSpecificService) { }

   ngOnInit(): void {
       this.jid = this.activatedRoute.snapshot.params['id'];
           this.jgeneralDetail = this.jobSpecificService.getJobDetail(this.jid);
           this.jobSpecificService.fetchJobDetails(this.jid).subscribe(res=>{
                console.log(res)
                   this.jobAllDetail = res;
                this.isLoading = false;
           })
      }

       makeSelected(index: number) {
         if(this.selectedAll.has(this.jobAllDetail.applicants[index])) this.selectedAll.delete(this.jobAllDetail.applicants[index]);
          else  { this.selectedAll.set(this.jobAllDetail.applicants[index], []);
      }
}

           isSelected(index: number) {
             return this.selectedAll.has(this.jobAllDetail.applicants[index]);
           }

         saveSelected() {

         }
}
