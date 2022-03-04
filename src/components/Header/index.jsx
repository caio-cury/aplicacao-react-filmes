import logo from '../../assets/logo.svg';
import play from '../../assets/play.svg';
import styles from './styles.module.css';

function Header() {
    return (
        <header>
            <div className={styles.img_container}>
                <img src={logo} alt="Logo" />
            </div>
            <h1 onClick={() => window.location.reload()} className={styles.title}>Filmes</h1>
            <div className={styles.img_container}>
                <img src={play} alt="Play" />
            </div>
        </header>
    );
}

export default Header;