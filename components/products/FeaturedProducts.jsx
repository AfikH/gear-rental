import { productsList } from "./productsListStatic";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = ({className}) => (
    <section className={`featured-products ${className}`}>
        <span className="featured-products-title">Featured Products</span>
        <div className="featured-products-list">
            {productsList.map((product, index) => {
                if(product.featured){
                    return <FeaturedProduct key={index} product={product} />;
                }
            })}
        </div>
    </section>
)

export default FeaturedProducts;