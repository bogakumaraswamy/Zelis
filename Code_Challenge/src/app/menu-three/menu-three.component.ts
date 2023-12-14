import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-menu-three',
  templateUrl: './menu-three.component.html',
  styleUrls: ['./menu-three.component.scss']
})
export class MenuThreeComponent implements OnInit {
  menudata: any;
  
  constructor(private userdata: UsersdataService) {

    userdata.getdat().subscribe((data)=>{
      this.menudata = data;
    })

   }

  ngOnInit(): void {
  }

}
