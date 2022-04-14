import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // useState를 사용하기 위한 import

function Detail() {
  // 영화의 자세한 정보를 보여주는 페이지
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const result = await response.json();
    setMovies(result.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image}></img>
      <p>출시년도 : {movie.year}</p>
      <p>상영시간 : {movie.runtime}</p>
      <p>평점 : {movie.rating}</p>
      {/* <p>
        영화 장르 :
        {movie.genres.map((value) => (
          <li>{value}</li>
        ))}
      </p> */}
      <p>영화 설명 : {movie.description_intro}</p>
    </>
  );
}

export default Detail;
