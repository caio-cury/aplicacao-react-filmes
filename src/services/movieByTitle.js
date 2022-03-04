async function moviesSearch(titulo) {
    const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${titulo}`, {
        method: 'GET'
    });

    const data = await response.json();

    return data;
}

export default moviesSearch;