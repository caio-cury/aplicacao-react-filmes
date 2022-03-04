async function movieById(id) {
    const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}`, {
        method: 'GET'
    })
    const data = await response.json();

    return data;
}

export default movieById;