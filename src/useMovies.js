import { useState,useEffect } from "react";
const key = "21471b3e";
   export function useMovies(query){
    const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
    useEffect(
        function () {
            // callback?.();
          const controller=new AbortController();
          async function fetchMovies() {
            try {
              setError("");
              setIsLoading(true);
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${key}&s=${query}`,{signal:controller.signal}
              );
              if (!res.ok)
                throw new Error("something went wrong with fecthing movies");
              const data = await res.json();
              if (data.Response === "False") throw new Error("Movie not found");
              setMovies(data.Search);
              setError("");
              console.log(data);
            } catch (err) {
              console.log(err.message);
              if(err.name!=="AbortError")
             {
               setError(err.message);
              }
            } finally {
              setIsLoading(false);
            }
          }
    
          if (query.length < 3) {
            setError("");
            setMovies([]);
    
            return;
          }
         // onCloseMovie();
          fetchMovies();
          return function(){
            controller.abort();
          }
        },
        [query]
      );
      return {movies,isLoading,error};
   }