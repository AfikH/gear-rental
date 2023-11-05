import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Sound = () => (
	<div className="page">
		<Hero
		title="Sound"
		subTitle="Browse our collection of sound gear for rent and pick what's best for you."
		image="/images/page-hero/4.png"
		/>
		<Products className="products-sound" category="sound" />
	</div>
);

export default Sound;