function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}  className="movie-card">
      <img src={movie.Poster} alt={movie.Title} width="150" />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
