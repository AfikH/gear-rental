import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Grip = () => (
	<div className="page">
		<Hero
		title="Grip/Services"
		subTitle="Browse our collection of grip gear for rent and pick what's best for you."
		image="/images/page-hero/6.png"
		/>
		<Products className="products-grip" category="grip" />
	</div>
);

export default Grip;