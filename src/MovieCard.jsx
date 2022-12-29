 const MovieCard = ({movie : {Title,Year, imdbId, Type, Poster}}) => {
  return (
    <div className="movie" key={imdbId}>
          <div>
          <p>{Year}</p>
          </div>

          <div>
            <img
            src={Poster!== 'N/A' ? Poster : "https://via.placeholder.com/400"}
            alt={Title}/>
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>

        </div>
  )
}

export default MovieCard