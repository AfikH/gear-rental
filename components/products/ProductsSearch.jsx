const ProductsSearch = ({setSearchQuery, setLoading}) => {
	let timer = undefined;

	const handleSearch = (inputValue) => {
		console.log('handleSearch');
		clearTimeout(timer);
		
		if(!timer){
			console.log('setLoading');
			setLoading(true);
		}
		
		timer = setTimeout(() => {
			console.log('timer');
			setSearchQuery(inputValue)
		}, 1000);
	}

	return(
		<label className="products-search-input" htmlFor="productsSearchInput">
			<input id="productsSearchInput" type="text" placeholder="Search our products..." onChange={e => handleSearch(e.target.value)} />
		</label>
	)
}

export default ProductsSearch;