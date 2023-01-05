import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const MovieDetails2 = ({ Movies }) => {
  

    return (
      <div>
        {Movies.map((Movie) => (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{Movie.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {Movie.poster}
              </Card.Subtitle>
              <Card.Link as={Link} to={`/MovieDetails1/${Movie.id}`}>Go to more details</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  
  export default MovieDetails2;