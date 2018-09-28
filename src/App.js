import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
/*
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]
const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._SY445_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY7cfqxBSMGrQbjxWn7BLbggY_Ibg5EMqlCNstFq4n0QRm1pWNg"
]
*/
class App extends Component {
  state = {
    greeting: 'Hello!'
  }

  state = {}
  
  componentDidMount(){
/*
    setTimeout(() => {
      this.setState({ 
	greeting: 'something' 
      })
    }, 5000)
*/
/*
    setTimeout(() => {
      this.setState({
        movies: [
  { 
    id: 1, 
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._SY445_.jpg"
  },
  {
    id: 2,
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  { 
    id: 3, 
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  { 
    id: 4, 
    title: "Star Wars",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY7cfqxBSMGrQbjxWn7BLbggY_Ibg5EMqlCNstFq4n0QRm1pWNg"
  },
  { 
    id: 5,
    title: "Transpotting",
    poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  }]
      })
    }, 3000)
*/
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie key={movie.id} 
		title={movie.title} 
		poster={movie.medium_cover_image} 
		genres={movie.genres} 
	        synopsis={movie.synopsis}    
	     />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))

  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies(): 'Loading'}
      </div>
    );
  }
}

export default App;
