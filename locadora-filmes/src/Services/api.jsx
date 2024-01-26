import axios from "axios"

// Base url: https://api.themoviedb.org/3/
// url api:  https://api.themoviedb.org/3/movie/550?api_key=7fe2c2f94efd5141f2d2d9245f7bd570 

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default api