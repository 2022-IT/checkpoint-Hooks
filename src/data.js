import { v4 as uuidv4 } from 'uuid';


const data =[{
    id : uuidv4() ,
    title: "Black Swan",
    Description: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake.",
    posterUrl:"https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/103/440/FO-1025_po-reg-medium_orig.jpg",
    trailerUrl:"https://www.youtube.com/embed/B7nU1RCkrnQ",
    rating: 8,
  },{
    id : uuidv4(),
    title: "Mr. Nobody",
Description: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.",
posterUrl:"https://upload.wikimedia.org/wikipedia/en/3/32/Mr._Nobody_%28film_poster%29.jpg",
trailerUrl:"https://www.youtube.com/embed/9k8SoLS0KwU",
rating: 6,
    
  },
  {
    id : uuidv4(),
    title: "The Ghost Writer",
Description: "A ghost writer, hired to complete the memoirs of a former British Prime Minister, uncovers secrets that put his own life in jeopardy.",
posterUrl:"https://fr.web.img6.acsta.net/medias/nmedia/18/73/96/74/19238405.jpg",
trailerUrl:"https://www.youtube.com/embed/WrvkY6rAgHU",
rating: 7,
  },
  {
    id : uuidv4(),
    title: "Alice in Wonderland",
Description: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
posterUrl:"https://lumiere-a.akamaihd.net/v1/images/image_ccd6a58d.jpeg",
trailerUrl:"https://www.youtube.com/embed/P_IVeP3i7B0",
rating: 8,
  },
];

export default data