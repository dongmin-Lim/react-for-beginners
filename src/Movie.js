import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, rating, runTime }) {
  return (
    <>
      <img src={coverImg}></img> <p />
      <Link to="/Detail">
        <h1>{title}</h1> <p />
      </Link>
      year : {year} <p />
      rating : {rating} <p />
      runTime : {runTime} min
      <p />
      <hr />
    </>
  );
}

export default Movie;
