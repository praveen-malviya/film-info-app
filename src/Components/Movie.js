import { useEffect, useState } from "react";
import noMedia from "../Images/noMedia.png";


const Movies = () => {
    const [movies, setMovies] = useState(null);
     const [posTrue, setPosTrue] = useState(false);

         useEffect(() => {
             fetch('https://movie-rest-api-default-rtdb.firebaseio.com/movieData.json?print=pretty')
            .then(response => response.json())
            .then(json => {  
            setMovies(json)
        //    console.log("MovieSS "+JSON.stringify(json));
            })
    }, [])

    const deleteHandler = (index) => {
            
        const newdata = movies.filter(movie => !(movie.id == index))
        console.log(JSON.stringify(newdata));
        setMovies(newdata);
        fetch('https://movie-rest-api-default-rtdb.firebaseio.com/movieData.json', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(newdata)
        })
    }


    return ( 
        <div className="movies">
            <h2>List of Your Movies</h2>

            <div className="movieTile">
            {movies && (movies.map((data) =>
            // { data.id && (
            <div key={data.id}> 
               {data.poster_path ? (<img src={("https://image.tmdb.org/t/p/w200/"+data.poster_path)} alt="Movie Poster" 
                    />):(
                        <img src={noMedia} alt="NoMovie poster" />
                    )}
            <h5>{data.original_title}</h5>
            {data.release_date && <h5>{data.status}: {data.release_date.slice(0, 4)} </h5>}
             <span></span>
                    
                    <span className="rating"> Rated : {data.vote_average} </span>
            <button onClick={() => deleteHandler(data.id)}> Remove </button>
        </div>
    //    ) }    
        ))} 
            </div>
            
        </div>
     );
}
 
export default Movies;