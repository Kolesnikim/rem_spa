import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  // l = null;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    // this.http.get().subscribe(res => {
    //  this.l = res;
   // });
  }

}
