//movie_service.js
import axios from 'axios';


export const searchMovies = function(){
    axios.get("http://www.omdbapi.com/?s=future&apikey=4a24f274")
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
}