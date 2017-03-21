var movies = function(){
    this.movies = [
        {
            id: 1,
            'title': "Anchor Man",
            'actors': ['Will Ferrell','Christina Applegate','Steve Carrell'],
            'quotes': ['I love lamp','Don\'t act like you\'re not impressed','60 % of the time it work every time']
        },
        {
            id: 2,
            'title': 'Lord of the Rings',
            'actors': ['Viggo Mortensen','Sir Ian McKellan','Liv Tyler','Elijah Wood'],
            'quotes': ['Of course you are Mr. Frodo. And I\'m comin with you!','My precious', 'Fly you fools!']
        },
        {
            id: 3,
            'title': 'Monty Python and the Holy Grail',
            'actors': ['John Cleese','Billy Bob Thronton','Alfred Hithcock'],
            'quotes': ['She\'s got huge tracts of land','We\'re knights of the round table!','Message for you sir!']
        }
    ];
    this.getById = function(id,prop,movies=this.movies){
        return new Promise(function(resolve,reject){
            movies.forEach(function(movie){
                if (movie.id === parseInt(id)){
                    var movProp = movie[prop];
                    resolve(movProp);
                }
            });
            reject('ERROR: Not found');
        });
    };
}

module.exports = movies;