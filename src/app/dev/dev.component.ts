import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

    // toProfile() {
    //    this.router.navigate(['/dev']);
    // }
    //  toJobs() {
    //      this.router.navigate(['/djobs']);
    //  }
    //  toSearch() {
    //
    //  }

}
