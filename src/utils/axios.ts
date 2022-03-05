import axios from 'axios'

const apiFirebase = axios.create({
    baseURL: 'https://cinemada-39775-default-rtdb.firebaseio.com/',
})

const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "284193af99f8455ac5b6877f9a986cfd",
    },
});

export { apiFirebase, apiMovie }
