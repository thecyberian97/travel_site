import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal-component',
  templateUrl: './carousal-component.component.html',
  styleUrls: ['./carousal-component.component.scss']
})
export class CarousalComponentComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
