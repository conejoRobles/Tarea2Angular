import { Component, OnInit, Input } from '@angular/core';
import {IMovie} from '../IMovie';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input ('datos') public movies: IMovie []
  constructor() { }

  ngOnInit(): void {
    
  }

}
