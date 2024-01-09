import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  constructor(private router: Router) { }

  packages = [
    {
      id:1,
      title: "Kaziranga 2D 1N",
      short_desc: "Arunachal",
      long_desc: "Arunachal",
      photos: ["", ""],
    },
    {
      id:2,
      title: "Shillong 2D 1N",
      short_desc: "Arunachal",
      long_desc: "Arunachal",
      photos: ["", ""],
    },
    {
      id:3,
      title: "Tawang 2D 1N",
      short_desc: "Arunachal",
      long_desc: "Arunachal",
      photos: ["", ""],
    }]

    routeToPackacgeDetails(id:number){
      this.router.navigateByUrl('/package-details', { state: { id: id } });
    }

}
