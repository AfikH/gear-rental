import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Lighting = () => (
	<div className="page">
		<Hero
		title="Lighting"
		subTitle="Browse our collection of lighting gear for rent and pick what's best for you."
		image="/images/page-hero/5.png"
		/>
		<Products className="products-lighting" category="lighting" />
	</div>
);

export default Lighting;