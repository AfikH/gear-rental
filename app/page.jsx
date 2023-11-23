import HeroCarousel from '@/components/home/HeroCarousel';

import styles from './page.module.css';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import Products from '@/components/products/Products';

const Home = () => (
	<div className="page">
		<section className={styles.carouselContainer}>
			<HeroCarousel className={styles.carousel} slideClassName={styles.carouselSlide} />
			<article className={styles.carouselOverlay}>
				<h1>Gear Rental</h1>
				<p>Professional cinematography & photography gear for rent.</p>
			</article>
		</section>
		<FeaturedProducts className={styles.featuredProducts} />
		<Products className="products-home" />
	</div>
);

export default Home;