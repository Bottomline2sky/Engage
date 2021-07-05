import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {DprofileService} from '../dprofile.service';
import {environment} from '../../../../environments/environment.prod';
import {DuprofileDeactivationInterface} from './duprofile-deactivate.service';
import {DprofileModel} from '../dprofile.model';

@Component({
  selector: 'app-duprofile',
  templateUrl: './duprofile.component.html',
  styleUrls: ['./duprofile.component.css']
})
export class DuprofileComponent implements OnInit, DuprofileDeactivationInterface {

       isSaved : boolean = false;
      dProfile : DprofileModel = null;
  imageUrl: string ;
  profileForm: FormGroup = new FormGroup({
    'name' : new FormControl(null),
    'about': new FormControl(null),
    'education': new FormArray([]),
    'skills' : new FormArray([]),
    'experience': new FormArray([])
  });



   skills: string[] = ['Web D', 'Software D' , 'Linux' ,'Data Science' , 'Java Script' , 'Java' , 'Python'];




   constructor(private dprofileService : DprofileService) { }

  ngOnInit(): void {

    this.dprofileService.profileEmit.subscribe((res: DprofileModel )=>{
      if(res == null) {
        this.dprofileService.fetchProfile();
      }
      else  {
        this.dProfile = res;
         this.startUpOperations();
      }
    });
   }


    startUpOperations() {
      this.profileForm.patchValue({
        'name' : this.dProfile.name,
        'about' : this.dProfile.about
      });
      this.imageUrl = this.dProfile.pimage;
      for(let edu of this.dProfile.education) {
        let  tempGroup = new FormGroup({
          'year' : new FormControl(edu.year),
          'school' : new FormControl(edu.school)
        });
        (<FormArray>this.profileForm.get('education')).push(tempGroup);
      }

      for(let skill of this.dProfile.skills) {
        let tempGroup = new FormGroup({
          'skill' : new FormControl(skill.skill),
          'value' : new FormControl(skill.value)
        }) ;
        (<FormArray>this.profileForm.get('skills')).push(tempGroup);
      }

      for(let exper of  this.dProfile.experience) {
        let tempGroup = new FormGroup({
          'year' : new FormControl(exper.year),
          'company' : new FormControl(exper.company)
        });
        (<FormArray>this.profileForm.get('experience')).push(tempGroup);
      }
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


     canDeactivate() {
              if(this.isSaved)  {
                 return true;
              }
              else {
                 return confirm("Discard Changes !!!!");
              }
      }
  onSubmit( ) {
        this.isSaved = true;

  }

}
