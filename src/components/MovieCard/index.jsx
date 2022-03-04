import style from './styles.module.css';
import searchModalMovie from '../../services/movieById';
import { useState } from 'react';
import Modal from '../Modal/index';
import star from '../../assets/estrela.svg';

function MovieCard({ id, img, title, rating }) {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});
    async function handleMovieModal(id) {
        setModal(true);
        const data = await searchModalMovie(id);
        setModalData(data);
    }
    return (
        <>
            <div
                className={style.card_filme}
                onClick={() => handleMovieModal(id)}
            >
                <div className={style.img} style={{ backgroundImage: `url(${img})` }}>
                    {img === null && <h1 className={style.no_img}>Imagem não disponível</h1>}
                </div>
                <div className={style.content}>
                    <span>{title.length < 18 ? title : `${title.slice(0, 15)}...`}</span>
                    <span>{rating} <img src={star} alt='star' /></span>
                </div>
            </div>
            {modal && <Modal
                closeModal={() => setModal(false)}
                img={modalData.poster_path}
                title={modalData.title}
                description={modalData.overview}
                genres={modalData.genres}
                origin={modalData.production_countries}
                runtime={modalData.runtime}
            />}
        </>
    );
}

export default MovieCard;