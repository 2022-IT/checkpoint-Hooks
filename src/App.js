import data from './data'
import {useState} from 'react'
import MovieLists from './Components/MovieLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import Filtre from './Components/Filtre';
import "./App.css";


function App({movies,setMovies}) {
  const [search,setSearch] = useState('');
  const [rate, setRate] = useState(0)
  const AddNewMovie = (kk)=>{
      setMovies([...movies, kk])
  }
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',marginLeft:"1cm",marginBottom:"1.4cm"}}>
        <AddMovie AddNewMovie={AddNewMovie}/>
        <Filtre setSearch={setSearch} setRate={setRate}></Filtre>
        
      </div>
      <MovieLists movies={movies.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default App;
