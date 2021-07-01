import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
  }

    onSubmit() {
    console.log(this.jobForm);
    }


}
