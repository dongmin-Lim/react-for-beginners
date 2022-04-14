import { useState, useEffect } from "react"; // useState를 사용하기 위한 import
import Movie from "../Movie"; // ../은 상위경로를 나타냄

function Home() {
  const [movies, setMovies] = useState([]);
  async function getMovie() {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year"
    );
    const result = await response.json();
    setMovies(result.data.movies);
    console.log(movies);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          runTime={movie.runtime}
        />
      ))}
    </>
  );
}
export default Home;
