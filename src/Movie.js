import { Link } from "react-router-dom";

function Movie({ id, coverImg, title }) {
  // 메인화면에서 영화 목록을 보여주는 js

  return (
    <>
      <Link to={`/detail/${id}`}>
        <h1>{title}</h1> <p />
      </Link>
      <img src={coverImg}></img> <p />
      <p />
      <hr />
    </>
  );
}

export default Movie;
