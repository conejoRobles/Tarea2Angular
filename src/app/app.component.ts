import { Component, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { MoviesService } from "./services/movies.service";
import { IMovie } from './IMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarea 2'
  date: Date = new Date()
  currentYear: number = this.date.getFullYear()
  years: number[] = []
  movies: IMovie[] = []
  _manageTitle: string = ""
  _manageYear: number = 0

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.loadYears()
  }

  get manageTitle(): string {
    return this._manageTitle
  }

  set manageTitle(value: string) {
    this._manageTitle = value
  }

  get manageYear(): number {
    return this._manageYear
  }

  set manageYear(value: number) {
    this._manageYear = value
  }

  handleClick() {
    console.log(this._manageTitle + "-" + this._manageYear)
    this.moviesService.getMovies(this._manageTitle, this._manageYear).subscribe((res: any) => {
      res.Search.map(movie => {
        this.moviesService.getDetails(movie.imdbID).subscribe((res: any) => {
          let mov: IMovie = {
            'Title': movie.Title,
            'Year': movie.Year,
            'Genre': res.Genre,
            'Country': res.Country,
            'img': movie.Poster,
            'Rate': movie.Ratings
          }
          this.movies.push(mov)
          console.log(mov.Title)
        })
      })
    })
  }

  loadYears() {
    for (let i = this.currentYear; i > 1888; i--) {
      this.years.push(i)
    }
  }
}
