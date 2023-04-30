import React from 'react'
import { useSelector } from "react-redux";
import LoginPage from './LoginPage/LoginPage';
import './LoginPage.css'
import './MainPage.css'
import './addproduct.css'
import './ProductList.css'
import MainPage from './MainPage/MainPage';
import ProductList from './ProductList';

function Pages() {

 const data = useSelector((state) => state.user);

  return (
    
    <div>
      {data ? (
        <MainPage />
      ):(
        <LoginPage />
      )}
    </div>
  )
}

export default Pages