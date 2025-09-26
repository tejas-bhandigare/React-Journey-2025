import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MovieSearch() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=218ea9c8&s=${query}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong");
      }
      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
