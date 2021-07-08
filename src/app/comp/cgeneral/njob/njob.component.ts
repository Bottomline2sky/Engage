import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {JobGeneralService} from '../../jobServices/jobGeneral.service';

@Component({
  selector: 'app-njob',
  templateUrl: './njob.component.html',
  styleUrls: ['./njob.component.css']
})
export class NjobComponent implements OnInit {
            languageCode: { skill:string , val: number}[] =
              [ {skill: 'Cpp' , val: 1},
                {skill: 'Java' , val: 2},
                {skill: 'C#' , val: 3},
                {skill: 'C' , val: 4},
                {skill: 'Data-Science', val: 5},
                { skill: 'Python' , val:  6}
                ];
            @ViewChild('f') jobForm: FormGroup;


  constructor(private jobGeneralService : JobGeneralService) { }

  ngOnInit(): void {
  }

    onSubmit() {
       console.log(this.jobForm)
        let dateVal = this.jobForm.value.jdeadline;
        let nArray=  dateVal.split('-');
         const cValForm = {...this.jobForm.value};
         cValForm.jdeadline =new Date(nArray[0],nArray[1],nArray[0]).getTime();
    this.jobGeneralService.newJobPost(cValForm).subscribe(res=>{
                   console.log(res);
        }, error=>{
        console.log(error);
    });
  }


}
