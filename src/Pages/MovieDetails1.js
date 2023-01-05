import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


const MovieDetails1 = ({Movies}) => {
  const navigate= useNavigate()
  const {idMovie} = useParams()
  const foundMovie = Movies.find(el=> el.id === idMovie)
  
  
  return (
    <div>
      <Card style={{width:'9cm',marginLeft:"1cm"}}>
      <ListGroup variant="flush">
        <ListGroup.Item>{foundMovie.title}</ListGroup.Item>
        <ListGroup.Item>{foundMovie.Description}</ListGroup.Item>
        <ListGroup.Item>{foundMovie.rating}</ListGroup.Item>
        <ListGroup.Item >
        <iframe src={foundMovie.trailerUrl}></iframe>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    <Button variant="primary" onClick={()=>navigate('/')}>GO BACK TO HOME</Button>
    </div>
  )
}

export default MovieDetails1