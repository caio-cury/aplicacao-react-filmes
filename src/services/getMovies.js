async function getMovies() {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=true', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
}


export default getMovies;