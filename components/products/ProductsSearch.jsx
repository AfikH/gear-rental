const ProductsSearch = ({setSearchQuery, setLoading}) => {
	let timer;

	const handleSearch = (inputValue) => {
		setLoading(true);
		clearTimeout(timer);
		timer = setTimeout(() => {
			setSearchQuery(inputValue);
		}, 1000);
	}

	return(
		<label className="products-search-input" htmlFor="productsSearchInput">
			<input id="productsSearchInput" type="text" placeholder="Search our products..." onChange={e => handleSearch(e.target.value)} />
		</label>
	)
}

export default ProductsSearch;