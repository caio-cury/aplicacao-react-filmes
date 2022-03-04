import { useEffect, useState, useRef } from 'react';
import setaDireitaBranca from '../../assets/seta-direita-branca.svg';
import setaEsquerdaBranca from '../../assets/seta-esquerda-branca.svg';
import styles from './styles.module.css';
import MovieCard from '../MovieCard';
import getMovies from '../../services/getMovies';
import searchMovies from '../../services/movieByTitle';

function Carousel() {

    const [movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState('');
    const carouselRef = useRef(null);

    async function moviesList() {
        const list = await getMovies();
        setMovieList(list);
    }
    useEffect(() => {
        moviesList();
    }, []);

    async function handleSearch(title) {
        if (!title) {
            moviesList();
        } else {
            const movieSearch = await searchMovies(title);
            setMovieList(movieSearch);
        }
        setSearch('');
    }
    function handleLeftClick(event) {
        event.preventDefault();
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
    function handleRightClick(event) {
        event.preventDefault();
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
    return (
        <div className={styles.main_container}>
            <input
                className={styles.search_input}
                type="text"
                onChange={event => setSearch(event.target.value)}
                value={search}
                onKeyDown={(event) => event.key === 'Enter' && handleSearch(search)}
                placeholder="Pesquisar..."
            />
            <div className={styles.carousel_container}>
                <button className={styles.previous_page_btn}>
                    <img
                        src={setaEsquerdaBranca}
                        alt="Página anterior"
                        className={styles.arrows}
                        onClick={handleLeftClick}
                    />
                </button>
                <div ref={carouselRef} className={styles.carousel}>
                    {movieList.results && movieList.results.length === 0 && <h1 className={styles.not_found}>Título não encontrado =(</h1>}
                    {movieList.results && movieList.results.map(filme => <MovieCard
                        key={filme.id}
                        id={filme.id}
                        img={filme.poster_path}
                        title={filme.title}
                        rating={filme.vote_average}
                    />)}
                </div>
                <button className={styles.next_page_btn}>
                    <img
                        src={setaDireitaBranca}
                        alt="Próxima página"
                        className={styles.arrows}
                        onClick={handleRightClick}
                    />
                </button>
            </div>
        </div>
    );
}

export default Carousel;