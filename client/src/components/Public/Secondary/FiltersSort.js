
import Carousel from 'nuka-carousel';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { setSearchProducts} from '../../Store/actions'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


const ArrangeContainer = ({conditions,getSortedProd,searchTerm}) => {
let sortItems = (sortingType)=>{
    getSortedProd(searchTerm, sortingType);
}
    return <SortFilter filtertype={conditions} manageSort={sortItems} />
}

const SortFilter = ({filtertype, manageSort})=>{

return (
    <div>
<div style={{"background": "black" , "display": "flex", "flex-flow" : "row wrap", "justify-content":"flex-end", "alignItems":"center"}}>
      <span>
       <DropdownButton variant="info" id="dropdown-button-drop-left" drop="left" title={"Filtrar por Estado"}>
          {filtertype !== undefined && ( filtertype.map((el, index) => <Dropdown.Item key={index} >{el}</Dropdown.Item>))}
        </DropdownButton>
        </span>
        <span>
       <DropdownButton variant="info" id="dropdown-button-drop-right" drop="right" title={"ordenar"} style={{"margin-left":"40px", "margin-right":"40px"}}>
           <Dropdown.Item onClick={() => manageSort("price_asc")} value="price_asc"> Precio Ascendente</Dropdown.Item>
           <Dropdown.Item onClick={() => manageSort("prices_desc")} value="prices_desc"> Precio Descendente </Dropdown.Item>
           <Dropdown.Item onClick={() => manageSort("relevance")} value="relevance"> Relevancia</Dropdown.Item>
        </DropdownButton>
        </span>
      </div>
      </div>
)
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        conditions: state.conditions

     }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return{
          getSortedProd: (searchTerm,sortingType)=>{
            fetch(`http://localhost:3001/api/search?q=${searchTerm}&s=${sortingType}`)
            .then(response => response.json())
            .then( results=>dispatch(setSearchProducts(results)))
            .catch(error => console.log('error', error));
          }
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArrangeContainer);