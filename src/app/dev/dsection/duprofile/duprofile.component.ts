import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-duprofile',
  templateUrl: './duprofile.component.html',
  styleUrls: ['./duprofile.component.css']
})
export class DuprofileComponent implements OnInit {
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztQS_0iZ6EV3Nd6zs6YcNmFB8c7ciapy1MA&usqp=CAU';
  profileForm: FormGroup = new FormGroup({
    'name' : new FormControl(null),
    'about': new FormControl(null),
    'education': new FormArray([]),
    'skills' : new FormArray([]),
    'experience': new FormArray([])
  });



   skills: string[] = ['Web D', 'Software D' , 'Linux' ,'Data Science' , 'Java Script' , 'Java' , 'Python'];





  constructor() { }

  ngOnInit(): void {
  }
   // Education Field
   onAddSchool() {
    let addField = new FormGroup({
         'year' : new FormControl(null),
        'school': new FormControl(null)
    });
    (<FormArray>this.profileForm.get('education')).push(addField);
   }
    getEducations() {
        return (<FormArray>this.profileForm.get('education')).controls;
    }
    onDelSchool(x: number) {
      (<FormArray>this.profileForm.get('education')).removeAt(x);
  }

    // Skills sections

      onAddSkill() {
         let nskill = new FormGroup({
           'skill' : new FormControl(null),
           'value' :  new FormControl(5)
        });
        (<FormArray>this.profileForm.get('skills')).push(nskill);
      }

      getSkills() {
        return (<FormArray> this.profileForm.get('skills')).controls;
      }

      onDelSkill(j) {
     (<FormArray>this.profileForm.get('skills')).removeAt(j);
   }

   onAddExperience() {
      let newExper = new FormGroup({
          'year' : new FormControl(null),
           'company' : new FormControl(null)
      });
     (<FormArray>this.profileForm.get('experience')).push(newExper);

   }

     getExperience() {
       return (<FormArray>this.profileForm.get('experience')).controls;
     }
    onDelExpr(j) {
      (<FormArray>this.profileForm.get('experience')).removeAt(j);
    }



  onSubmit() {
    console.log(this.profileForm);
  }

}
