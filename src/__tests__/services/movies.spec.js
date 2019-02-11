import * as movieServices from "../../services/movies";

it('should get movie list', done => {
    movieServices.getMovieList().then((movieList) => {
        expect(movieList.status).toEqual(200);
        expect(movieList.data.results.length).not.toEqual(0);
        done();
    });
});

it('should get a specific movie', done => {
    movieServices.getMovieList().then((movieList) => {
        movieServices.getMovieById(movieList.data.results[0].id).then((movie) => {
            expect(movie.data.id).toEqual(movieList.data.results[0].id);
            done();
        });
    });
});