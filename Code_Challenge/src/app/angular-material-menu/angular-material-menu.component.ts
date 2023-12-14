import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-angular-material-menu',
  templateUrl: './angular-material-menu.component.html',
  styleUrls: ['./angular-material-menu.component.scss']
})
export class AngularMaterialMenuComponent implements OnInit {

  menudata: any;

  constructor(private userdata: UsersdataService) {

    userdata.getdat().subscribe((data)=>{
      this.menudata = data;
    })

   }

  ngOnInit(): void {
  }

}
