import {Component, Input, OnInit} from '@angular/core';
import {CdisplayService} from '../cdisplay.service';

@Component({
  selector: 'app-cabout',
  templateUrl: './cabout.component.html',
  styleUrls: ['./cabout.component.css']
})
export class CaboutComponent implements OnInit {
    @Input() cid: string;
  constructor(private cDisplayService: CdisplayService) { }

  ngOnInit(): void {

  }


      addSubScription() {
          this.cDisplayService.addSubScription(this.cid).subscribe(res=>{
                  alert("subscritpion add SUccessfully");
          });
      }


}
