import Image from "next/image";
import Link from "next/link";

const Product = ({product}) => (
	<article className="product">
		<div className="product-image">
			<Image
				src={product.image}
				alt='todo'
				height={500}
				width={500}
				priority
				style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', objectFit: 'contain', objectPosition: 'center'}}
			/>
		</div>
		<h3 className="product-title">{product.name}</h3>
		<p className="product-description">{product.description}</p>
		<div className="product-buttons">
			<Link className="product-button" href="/">Contact Us</Link>
		</div>
	</article>
);

export default Product;