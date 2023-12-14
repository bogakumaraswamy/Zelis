import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';
@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss']
})
export class MenuOneComponent implements OnInit {

  menudata: any;

  constructor(private userdata: UsersdataService) {

    userdata.getdat().subscribe((data)=>{
      this.menudata = data;
    })

   }

  ngOnInit(): void {
  }

}
