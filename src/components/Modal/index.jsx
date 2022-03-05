import style from './style.module.css';
import { useEffect, useRef } from 'react';

export default function Modal({ closeModal, img, title, description, genres, origin, runtime }) {
    const modalRef = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                closeModal();
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div className={style.modal}>
            <div ref={modalRef} className={style.modal_card}>
                <div className={style.card_content}>
                    <img className={style.modal_image} src={img} alt="" />
                    <h1 className={style.movie_title}>{title}</h1>
                    <div className={style.genres_container}>
                        {genres && genres.map(genre => <span className={style.genre} key={genre.id} >{genre.name}</span>)}
                    </div>
                    <p
                        className={style.origin}
                    >
                        Países: {origin && origin.map(country => <span key={country.name}>{`${country.name} `}</span>)}
                    </p>
                    <p className={style.runtime}>Duração: {runtime} minutos</p>
                    <p className={style.movie_preview}>{description}</p>
                </div>
            </div>
        </div>
    );
}