import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss']
})
export class MenuTwoComponent implements OnInit {
  menudata: any;
  constructor(private userdata: UsersdataService) {

    userdata.getdat().subscribe((data)=>{
      this.menudata = data;
    })

   }

  ngOnInit(): void {
  }

}
