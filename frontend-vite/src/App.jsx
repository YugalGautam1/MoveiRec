
import './App.css'
import questionmark from './assets/questionmark.png'
import transformers from './assets/image1.png'

function App() {

  const mylist = ['movie 1', 'movie 2', 'movie 3', 'movie 4','movie 5']
  const allMovies = ['Transformers1', 'Transformer2', 'Transformer3', 'Transformers4']
  return (
    <>
      <div className="title">
        <h1>Movie Recommender</h1>
        <form >
          <input
          type="text"
          id="searchedMovie"
          placeholder="Search for a movie..."
          className="search-bar"
          />
        </form>

      </div>

      <div className = "subtitle">
        <h2>Your List </h2>
        <div className = "image-row">
        {mylist.map((movie) => (
            <div className="movie-item">
              <img src={questionmark} alt="Movie Poster" className="movie-image" />
              <p className = "movie-name">{movie}</p>
            </div>
          ))}
        </div>
      </div>

      <div className = "subtitle">
          <h2>All Movies</h2>
          <div className = "image-row">
            {allMovies.map((movie) => (
            <div className="movie-item">
              <img src={transformers} alt="Movie Poster" className="movie-image" />
              <p className = "movie-name">{movie}</p>
            </div>
          ))}
        </div>

        </div>
        <button className="floating-button">Generate Recommendations</button>


    </>
  )
}

export default App
