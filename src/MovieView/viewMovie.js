import React from 'react'
import SingleMovie from './index'

const movie = {
  title: 'Taken',
  genres: ' Action | Thriller',
  writers: ' Luc Besson, Robert Mark Kamen',
  cast: ' Liam Neeson, Maggie Grace, Famke Janssen ',
  plot:
    'When his estranged daughter is kidnapped in Paris, a former spy (Liam Neeson) sets out to find her at any cost. Relying on his special skills, he tracks down the ruthless gang that abducted her and launches a one-man war to bring them to justice and rescue his daughter.',
  year: 2008,
  likes: 15,
  ratings: 700,
  image:
    'https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg?region=0,0,800,1200'
}

const ViewSingleMovie = () => {
  const {
    title,
    genres,
    writers,
    cast,
    plot,
    year,
    likes,
    ratings,
    image
  } = movie
  return (
    <SingleMovie
      title={title}
      genre={genres}
      writers={writers}
      cast={cast}
      plot={plot}
      year={year}
      likes={likes}
      ratings={ratings}
      image={image}
    />
  )
}

export default ViewSingleMovie
