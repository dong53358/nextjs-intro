import { getModuleBuildInfo } from "next/dist/build/webpack/loaders/get-module-build-info";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const API_KEY = "5c5750bf608396f58f7a40244eee6470";
  const BASE = "api.themoviedb.org/3/";
  const BASE_IMAGE = "image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://${BASE_IMAGE}/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          place-items: center;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
