import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztQS_0iZ6EV3Nd6zs6YcNmFB8c7ciapy1MA&usqp=CAU';
  constructor() { }

  ngOnInit(): void {
  }

}
