import Carousel from 'nuka-carousel';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { setRegions, setCategories, setSelected ,setSelectedCat, setSubCat} from '../Store/actions';
import ProductCard from './Secondary/ProductCard'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import FilterSorts from './Secondary/FiltersSort';
import PageNav from './Secondary/Pagination';


const ProductContainer = ({foundedProducts, conditions}) => {
  return <Catalog products={foundedProducts} />
}


const Catalog = ({products}) => (
  
  <div >
<FilterSorts/>
<PageNav/>



      
  
  <div className="container" style={{"display":"flex", "flex":"inline-block", "flex-flow": "row wrap" , "width" :"80%"}}>
    {products!=null&&(
        products.results.map( product=>{
            return(
                <ProductCard 
                key= {product.id}  
                image= {product.thumbnail}
                name=  {product.title}
                price= {product.price}
                condition= {product.condition}
                stock= {product.available_quantity}    
                />
            )
        })
        )}
  </div>
  
  </div>

)

const mapStateToProps = (state) => {
  return {
    foundedProducts : state.foundedProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

