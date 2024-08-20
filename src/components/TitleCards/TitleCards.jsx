import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import {Link} from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzkwMzVhNmM0NjRkNTc0NGE3ZjM5MTdmYmZlMzkwNiIsIm5iZiI6MTcyNDE0NjUxMy41NDE4OTIsInN1YiI6IjY2YzQ2MjRmNzExMDJkMGU1YTBiYTA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OXifCm12nOYjR-3P2BtExh6ZLBYi7N53ZqIkgf7xGGU'
    }
  };
  
  
  const handleWheel = (event) => {
    event.preventDefault(); // Added parentheses
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    const refCurrent = cardsRef.current;
    refCurrent.addEventListener('wheel', handleWheel);

    // Cleanup to remove the event listener when the component unmounts
    return () => {
      refCurrent.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
