"use client";

import { useEffect, useState } from 'react';

import Product from './Product';
import ProductsSearch from './ProductsSearch';
import { productsList } from './productsListStatic';
import { productCategories } from './productsCategories';

import '@/assets/css/products.css';

const Products = ({className, category = ''}) => {
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
	}, [options]);

	return(
		<div className={`products ${className}`}>
			<div className="products-search">
				<select defaultValue={options.category} onChange={e => setOptions({...options, category: e.target.value})}>
					<option value="">All</option>
					<option value="cameras">Cameras</option>
					<option value="lenses">Lenses</option>
					<option value="accesories">Accesories</option>
					<option value="sound">Sound</option>
					<option value="lighting">Lighting</option>
					<option value="grip">Grip</option>
				</select>
				<ProductsSearch setSearchQuery={setSearchQuery} />
			</div>
			<div className="products-list grid">
			{
			filteredProducts.length > 0 ?
				filteredProducts.map((product, index) => <Product key={index} product={product} />)
			:
				<span>Could not find any matching products.</span>
			}
			</div>
		</div>
	)
}

export default Products;