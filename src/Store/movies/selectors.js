export const getSliderData = (state) => {
    const movies = state.movies.movies
    return movies.map(movie => {
        return {
            id: movie.id,
            img: movie.img
        }
    })
}