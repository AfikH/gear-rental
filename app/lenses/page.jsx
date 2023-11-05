import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Lenses = () => (
	<div className="page">
		<Hero
		title="Lenses"
		subTitle="Browse our collection of lenses for rent and pick what's best for you."
		image="/images/page-hero/2.png"
		/>
		<Products className="products-lenses" category="lenses" />
	</div>
);

export default Lenses;