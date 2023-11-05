import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Accesories = () => (
	<div className="page">
		<Hero
		title="Accesories"
		subTitle="Browse our collection of accesories for rent and pick what's best for you."
		image="/images/page-hero/1.webp"
		/>
		<Products className="products-accesories" category="accesories" />
	</div>
);

export default Accesories;