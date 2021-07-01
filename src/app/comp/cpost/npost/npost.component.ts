import {Component, OnInit, Output} from '@angular/core';
import  {EventEmitter} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-npost',
  templateUrl: './npost.component.html',
  styleUrls: ['./npost.component.css']
})
export class NpostComponent implements OnInit {
            @Output() ee = new EventEmitter<void>();
                myPost = new FormGroup({
                  'message' : new FormControl(),
                   'image' : new FormControl(null),
                });
  constructor() { }
     imageUrl: string | ArrayBuffer | SafeResourceUrl = 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcGluZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  ngOnInit(): void {
  }



  onImageUpload(event: Event) {
         const file =  (event.target as HTMLInputElement).files[0];
         this.myPost.patchValue({image : file});
         this.myPost.updateValueAndValidity();
         const reader = new FileReader();

       reader.onload = () =>{
            this.imageUrl = reader.result;
      }
       reader.readAsDataURL(file);

  }

   goBack() {
       this.ee.emit();
   }

     onSendPost(message : string) {
          this.myPost.patchValue({message});
            console.log(this.myPost.value);
     }

}
