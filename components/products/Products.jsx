"use client";

import { useEffect, useState } from 'react';

import Product from './Product';
import ProductsSearch from './ProductsSearch';
import { productsList } from './productsListStatic';
import { productCategories } from './productsCategories';

import '@/assets/css/products.css';

const Products = ({className, category = ''}) => {
	const [loading, setLoading] = useState(true);
	const [options, setOptions] = useState({
		searchQuery: '',
		category
	});
	const [filteredProducts, setFilteredProducts] = useState([]);

	const setSearchQuery = (input) => {
		setOptions({...options, searchQuery: input});
	}	

	useEffect(() => {
		setFilteredProducts(productsList.filter(product => {
			if(!product.name.toLowerCase().includes(options.searchQuery.toLowerCase())) return false;
			if(options.category && !product.categories.includes(options.category.toLowerCase())) return false;
			return true;
		}));
		setLoading(false);
	}, [options]);

	return(
		<div className={`products ${className}`}>
			<div className="products-search">
				<select defaultValue={options.category} onChange={e => setOptions({...options, category: e.target.value})}>
					{productCategories.map((productCategory, index) => <option key={index} value={productCategory.value}>{productCategory.name}</option>)}
				</select>
				<ProductsSearch setSearchQuery={setSearchQuery} setLoading={setLoading} />
			</div>
			<div className="products-list grid">
			{loading ?
				<div className="fill-grid">
					<div className="lds-ellipsis">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			:
				filteredProducts.length > 0 ?
					filteredProducts.map((product, index) => <Product key={index} product={product} />)
				:
					<div className="fill-grid">
						<span className="message">Could not find any matching products.</span>
					</div>
			}
			</div>
		</div>
	)
}

export default Products;