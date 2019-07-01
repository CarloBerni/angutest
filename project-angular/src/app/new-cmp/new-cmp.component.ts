import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
   selector: 'app-new-cmp',
   templateUrl: './new-cmp.component.html',
   styleUrls: ['./new-cmp.component.scss']
})

export class NewCmpComponent implements OnInit {
   todaydate;
   newcomponentproperty;
   newcomponent = "Bonjour je test Angular";
   constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
      this.newcomponentproperty = this.myservice.serviceproperty;
   }
}