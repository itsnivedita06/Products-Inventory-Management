import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddProductForm from './AddProductForm/AddProductForm';
import { addProduct, editProduct, filterByName, filterByPrice, filterByQuantity, } from '../../store/slices/ProductSlice';

const ProductList = () => {
  //const products = useSelector((state) => state.products.list);
  
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterQuantity, setFilterQuantity] = useState('');
  const dispatch = useDispatch();

  const { products, filteredProducts } = useSelector(
    (state) => state.products
    );
  
    const handleAddProduct = (product) => {
      dispatch(addProduct(product));
      setShowForm(false);
      };
      
      const handleEditProduct = (product) => {
      dispatch(editProduct(product));
      };
      
      const handleSearch = (e) => {
      setSearchText(e.target.value);
      dispatch(filterByName(e.target.value));
      };
      
      const handleFilterPrice = (e) => {
      setFilterPrice(e.target.value);
      dispatch(filterByPrice(e.target.value));
      };
      
      const handleFilterQuantity = (e) => {
      setFilterQuantity(e.target.value);
      dispatch(filterByQuantity(e.target.value));
      };
  

  const handleProduct = () => {
    setShowForm(true);
   };

  return (
    <div className="products-list">

      {showForm ? (
        <AddProductForm onSubmit={handleAddProduct} />
      ) : (
        <div className='add-products'>
        <button className='add-products-btn' onClick={handleProduct}> 
        <i className="fa-solid fa-plus"></i> Add Products</button>
      </div>
      )}

      <h1>Products List</h1>

      <input
      type="text" className='search-input'
      placeholder="Search by name"
      value={searchText}
      onChange={handleSearch}
      />
      <label htmlFor="priceFilter">Filter by Price</label>

     <input className='search-input'
     type="number"
     id="priceFilter"
     value={filterPrice}
     onChange={handleFilterPrice}
     />
     <label htmlFor="quantityFilter">Filter by Quantity</label>

     <input className='search-input'
     type="number"
     id="quantityFilter"
     value={filterQuantity}
     onChange={handleFilterQuantity}
     />

<ul>
{filteredProducts.map((product) => (
<li key={product.id}>
<p>{product.name}</p>
<p>{product.description}</p>
<p>{product.price}</p>
<p>{product.quantity}</p>
<img src={product.image} alt='img' />
<button onClick={() => handleEditProduct(product)}>Edit</button>
</li>
))}
</ul>

    </div>
  );
};

export default ProductList;

//<li className='list'>hi</li>