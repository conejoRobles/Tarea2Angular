import { Component, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { MoviesService } from "./services/movies.service";
import { IMovie } from './IMovie';
import { isUndefined } from 'util';

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
  _manageTitle: string
  _manageYear: number

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
    this.movies = []
    console.log(this._manageTitle + "-" + this._manageYear)
    this.moviesService.getMovies(this._manageTitle, this._manageYear).subscribe((res: any) => {
      !isUndefined(res.Search)?(
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
          isUndefined(res.Search)?this.movies.push(mov):alert("debe ingresar un titulo")
          console.log(mov.Title)
          console.log("movies2" + this.movies)
        })
      })):(alert("No se encontraron peliculas"))
    })
  }

  loadYears() {
    for (let i = this.currentYear; i > 1888; i--) {
      this.years.push(i)
    }
  }
}
