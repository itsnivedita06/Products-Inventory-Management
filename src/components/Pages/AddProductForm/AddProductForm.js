import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/slices/ProductSlice';
//import './addproduct.css'

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      quantity,
      image,
    };
    dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
    setImage('');
  };

  return (

    
    <form onSubmit={handleSubmit} className='modal'>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          required/>

  </div>
  <div>
    <label htmlFor="quantity">Quantity</label>
    <input
      type="number"
      id="quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="image">Image</label>
    <input
      type="text"
      id="image"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
  </div>
  <button type="submit">Save</button>
</form>


);
};

export default AddProductForm;