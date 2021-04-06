import Movie from '../Movie/Movie'

const Movies = (props) =>{
    return(
        <div className="movie-container">
             {props.data.map((movies)=>{
                 return(
                     <div className="movie">
                         <p>{movies.title}</p>
                         <div className="poster">
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}/>
                         </div>
                     </div>
                 )
             })}
        </div>
    )
}

       
    //     <div>movie
    // {console.log(props.data.results)}
    // </div>
    // )}
    // return(
    //     // const allMovies = props.data.map((movie, idx) => 
    //     // <Movie data={props.data}/>)
    //     // return(
    //     //     <div>{allMovies}</div>
    //     // )
    //     <div>{props.data.map}</div>
     
    // )}
    
  

export default Movies;