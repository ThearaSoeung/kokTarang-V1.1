import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  developer: any = [
    {
      name: "Theara SOEUNG",
      position: "Software Engineer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/theara.jpeg'
    },
    {
      name: "Dara ROM",
      position: "Software Engineer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/ro.jpg'
    },
    {
      name: "Ewent NEAK",
      position: "Product Manager",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/ewent.jpeg',
    },
    {
      name: "Sunhor LY",
      position: "QA",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/hor.jpeg'
    },
    {
      name: "Sokminea VORN",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/minea.jpeg'
    },
    {
      name: "Entraboth ROUEN",
      position: "UX/UI",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/both.jpg'
    },

    {
      name: "Hengtong SOU",
      position: "Software Engineer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: '../../../assets/developers/tong.jpeg'
    },

  ]
}
