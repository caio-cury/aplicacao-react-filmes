import Header from '../../components/Header/index';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styles from './styles.module.css';

function Home() {

  return (
    <div className={styles.home_container}>
      <Header />
      <main>
        <Carousel />
      </main>
      <Footer />
    </ div>
  );
}

export default Home;
