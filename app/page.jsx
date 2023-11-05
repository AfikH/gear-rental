import HeroCarousel from '@/components/home/HeroCarousel';

import styles from './page.module.css';
import Products from '@/components/products/Products';

const Home = () => (
	<div className="page">
		<HeroCarousel className={styles.carousel} slideClassName={styles.carouselSlide} />
		<Products className="products-home" />
	</div>
);

export default Home;