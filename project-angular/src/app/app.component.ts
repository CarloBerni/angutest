import { Component } from "@angular/core";
import { MyserviceService } from './myservice.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Angular test";

  months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  isavailable = false;

  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
  }
  todaydate;
  componentproperty;
   constructor(private myservice: MyserviceService) {}
   ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created"; // value is changed.
    this.componentproperty = this.myservice.serviceproperty;
   }
}
