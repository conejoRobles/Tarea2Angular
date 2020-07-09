import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: any
  stars: number = 0;
  arr: any;
  constructor() { }

  ngOnInit() {
    let percent = 0
    this.rating.map(rating => {
      if (rating.Source == "Rotten Tomatoes") {
        percent = parseInt(rating.Value, 10)
        if (percent <= 20) {
          this.stars = 1
        } else if (percent > 20 && percent <= 40) {
          this.stars = 2
        } else if (percent > 40 && percent <= 60) {
          this.stars = 3
        } else if (percent > 60 && percent <= 80) {
          this.stars = 4
        } else if (percent > 80) {
          this.stars = 5
        }
      }
    })
    this.arr = new Array(this.stars).fill(1);
  }

}
