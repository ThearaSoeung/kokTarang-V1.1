import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   //image
   imageSport: string = "assets/sportall.png";
   tickImage: string = "assets/tick.png";
   abaLogo: string = "assets/logos/aba-web-top-logo.png";
   nham24Logo: string = "assets/logos/logo.png";
   aeonMallLogo: string = "assets/logos/unnamed.png";
   legnendCinemaLogo: string = "assets/logos/legend_logo.png";
   cellcardLogo: string = "assets/logos/logo-for-reach-02-1.png";
}
