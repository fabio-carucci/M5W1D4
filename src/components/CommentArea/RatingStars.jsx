import React from 'react';

export default function RatingStars({ rating }) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>); // Stellina piena
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Stellina vuota
    }
  }

  return (
    <>
      { stars }
    </>
  );
}