import App from "../App"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from '../Components/NavBar';
import MovieDetails1 from '../Pages/MovieDetails1';
import ErrorPage from '../Pages/ErrorPage';
import data from '../data'
import { useState } from "react";

const RouterComp = ()=>{
    const [movies,setMovies] = useState(data)

    return(
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<App movies={movies} setMovies={setMovies}/>}></Route>
        <Route path='/MovieDetails1/:idMovie' element={<MovieDetails1 Movies={ movies }/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      </Router>
    )
}

export default RouterComp