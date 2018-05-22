//movie_service.js
import axios from 'axios';


export const searchMovies = function(search_term, callback){
    axios.get("http://www.omdbapi.com/?s="+search_term+"&apikey=4a24f274")
        .then(function (response){
            callback(response);
        })
        .catch(function (error){
            console.log(error);
        });
}