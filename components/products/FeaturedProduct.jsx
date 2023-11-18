import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = ({product}) => (
	<article className="featured-product">
		<div className="featured-product-image">
			<Image
				src={product.image}
				alt='todo'
				height={500}
				width={500}
				priority
				style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', objectFit: 'contain', objectPosition: 'center'}}
			/>
		</div>
		<h3 className="featured-product-title">{product.name}</h3>
		<p className="featured-product-description">{product.description}</p>
		<div className="featured-product-buttons">
			<Link className="featured-product-button" href="/">Contact Us</Link>
		</div>
	</article>
);

export default FeaturedProduct;