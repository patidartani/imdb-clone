import React from 'react'
import "./App.css"
import Home from './pages/home/home'
import Header from './components/header/Header'
import {  Route, Routes } from 'react-router-dom'
import MovieList from './components/movieList/movieList'
import Movie from './pages/movieDetail/movie'

const App = () => {
  return (
    <div className='App'>
      <Header />
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
              </Routes>
    </div>
  )
}

export default App;