const initialState = {
  movies: [
    {
      title: 'Taken',
      genres: ' Action, Thriller',
      writers: ' Luc Besson, Robert Mark Kamen',
      cast: ' Liam Neeson, Maggie Grace, Famke Janssen ',
      plot:
        'A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.',
      year: 2008,
      likes: 15,
      ratings: 7,
      image:
        'https://cdn.theatlantic.com/thumbor/VQhcb1fR1ooLI1wHEJkADHBraDc=/0x84:1600x984/720x405/media/img/mt/2015/01/liamneeson/original.jpg'
    },
    {
      title: 'The Old Guard',
      genres: 'Action, Adventure, Fantasy',
      writers: ' Luc Besson, Robert Mark Kamen',
      cast: ' Charlize Theron, KiKi Layne, Matthias Schoenaerts',
      plot:
        'A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.',
      year: 2020,
      likes: 25,
      ratings: 7,
      image:
        'https://pyxis.nymag.com/v1/imgs/b22/776/58be38239586d0543481685908455e6005-the-old-gaurd.rsquare.w1200.jpg'
    }
  ]
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
