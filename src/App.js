import { getMovies} from './services/movie-db'
import { useState, useEffect} from 'react'
import './App.css';
import Movies from './components/Movies/Movies'

function App() {

const [selMovies, setMovies] = useState([]);
let movieData

async function getData() {
  const data = await getMovies();
  setMovies(data.results);
  // console.log(data);
  }


//use effect to update page

useEffect(() =>{
  getData();
}, [])



  return (
    <div className="App">
      <header className="App-header">
      <h1>React Movie App</h1>
      </header>
    <Movies data={selMovies}/>
    </div>
  );
}

export default App;
