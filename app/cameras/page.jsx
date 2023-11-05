import Products from "@/components/products/Products";
import Hero from "@/components/shared/Hero";

const Cameras = () => (
	<div className="page">
		<Hero
		title="Cameras"
		subTitle="Browse our collection of cameras for rent and pick what's best for you."
		image="/images/page-hero/1.webp"
		/>
		<Products className="products-cameras" category="cameras" />
	</div>
);

export default Cameras;