import {Component, OnInit, Output} from '@angular/core';
import  {EventEmitter} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';


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
  constructor(private postService : PostService) { }
  imageUrl: string | ArrayBuffer;


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
    const formData = new FormData();
    formData.append('message', this.myPost.value.message);
    formData.append('post',this.myPost.value.image);
    this.postService.addNewPost(formData).subscribe(res=>{
      console.log(res);
      alert("seuucdg");

    },error => {
      console.log(error)
    });
  }

}
