var express = require('express');
var app = express();
var port = 8080;
var movies = require('./movies');
var movie = new movies();
// console.log('MOVIE',movie);

app.get('/movies',function(req,res){
    // Return all info about all movies
    setTimeout(function(){
        res.writeHead(200);
        res.write(JSON.stringify(movie.movies));
        res.end();
    },500);
});
app.get('/movies/:movieId/actors',function(req,res){
    // Reuturn all actors from a movie
    setTimeout(function(){
        movie.getById(req.params.movieId,'actors').then(actors=>{
            res.writeHead(200);
            res.write(JSON.stringify(actors));
            res.end();
        }).catch(error =>{
            res.writeHead(404);
            res.write(error);
            res.end();
        });
    },500);
});
app.get('/movies/:movieId/quotes',function(req,res){
    // Return all quotes from a move
    setTimeout(function(){
        movie.getById(req.params.movieId,'quotes').then(quotes=>{
            res.writeHead(200);
            res.write(JSON.stringify(quotes));
            res.end();
        }).catch(error =>{
            res.writeHead(404);
            res.write(error);
            res.end();
        });
    },500);
});

console.log('Listening on port ',port);
app.listen(port);