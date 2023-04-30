import React from 'react'
import { useSelector } from "react-redux";
import { logout } from '../../../store/slices/LoginSlice'
import { useDispatch } from 'react-redux'
import ProductList from '../ProductList';

function MainPage() {

  const dispatch = useDispatch();

    const data = useSelector((state) => state.user);
    //console.log(data)
    const handleLogout = () => {
        dispatch(logout());
      };

  return (
    <div className='MainPage'>
       <div className='header'>
        <p className='name'> <i className="fa-solid fa-user"></i> {data.name}</p>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
       </div>
      
      <ProductList />
       
    </div>
  )
}

export default MainPage