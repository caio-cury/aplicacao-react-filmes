import style from './style.module.css';
import closeBtn from '../../assets/closeBtn.svg'
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function Modal({ closeModal, modalData }) {

    const { poster_path, title, overview, genres, production_countries, runtime } = modalData;

    const modalRef = useOnClickOutside(() => closeModal())

    return (
        <div className={style.modal}>
            <div ref={modalRef} className={style.modal_card}>
                <img
                    className={style.close_btn}
                    src={closeBtn}
                    alt="fechar"
                    onClick={() => closeModal()}
                />
                <div className={style.card_content}>
                    <img className={style.modal_image} src={poster_path} alt="" />
                    <h1 className={style.movie_title}>{title}</h1>
                    <div className={style.genres_container}>
                        {genres && genres.map(genre => <span className={style.genre} key={genre.id} >{genre.name}</span>)}
                    </div>
                    <p
                        className={style.origin}
                    >
                        Países: {production_countries && production_countries.map(country => <span key={country.name}>{`${country.name} `}</span>)}
                    </p>
                    <p className={style.runtime}>Duração: {runtime} minutos</p>
                    <p className={style.movie_preview}>{overview}</p>
                </div>
            </div>
        </div>
    );
}