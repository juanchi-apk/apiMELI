
import Carousel from 'nuka-carousel';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { setSearchProducts} from '../../Store/actions'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


const ArrangeContainer = ({ sortingType, conditions,getSortedProd,searchTerm, limit, foundedProducts, pagesQ, selectedPage}) => {
let setSortType = (sortingType)=>{
    console.log(sortingType);
    getSortedProd(searchTerm, sortingType, limit);
}
let setQuantity = (limit)=>{
    console.log(limit);
    getSortedProd(searchTerm, sortingType, limit);
}

    return <SortFilter sortingType={sortingType} filtertype={conditions} from={selectedPage} limit={limit} to={pagesQ} manageSortType={setSortType} manageQuantity={setQuantity} resultq={limit} products={foundedProducts}/>
}

const SortFilter = ({filtertype, limit,manageQuantity , manageSortType, resultq, products, from, to, sortingType})=>{

return (
<div>    
<div style={{"display":"flex", "flexFlow":"row-wrap" , "background": "black", "justifyContent":"space-between", "alignItems": "center" }}>
    <span style={{"display":"flex", "flexFlow":"row-wrap" , "color":"#f2ff42", fontWeight: "100", "font-size":"20px",  "font-family": "Passion One", "marginLeft":"2%"}}>
    {products!=null&& `Se estan mostrando ${resultq} resultados` }  
    {products!=null&&(
        <span style={{"display":"inline-flex" , "marginLeft":"2%"}}>
        MOSTRAR
        <DropdownButton  variant="info" id="dropdown-button-drop-right" drop="right" title={limit} style={{"margin-left":"40px", "margin-right":"40px"}}>
           <Dropdown.Item onClick={() => manageQuantity("15")} value="15"> 15</Dropdown.Item>
           <Dropdown.Item onClick={() => manageQuantity("30")} value="30"> 30 </Dropdown.Item>
           <Dropdown.Item onClick={() => manageQuantity("50")} value="50"> 50 </Dropdown.Item>
        </DropdownButton>
        </span>)}
        
        </span>
       


    

    <div style={{ "display": "flex", "flex-flow" : "row wrap", "justify-content":"flex-end", "alignItems":"center"}}>
      <span>
       <DropdownButton variant="info" id="dropdown-button-drop-left" drop="left" title={"Filtrar por Estado"}>
          {filtertype !== undefined && ( filtertype.map((el, index) => <Dropdown.Item key={index} >{el}</Dropdown.Item>))}
        </DropdownButton>
        </span>
        <span style = {{"display":"flex", "justifyContent":"center"}}>
        <a>Sort by: </a>
       <DropdownButton variant="info" id="dropdown-button-drop-right" drop="right" title={sortingType} style={{"margin-left":"40px", "margin-right":"40px"}}>
           <Dropdown.Item onClick={() => manageSortType("price_asc")} value="price_asc"> Precio Ascendente</Dropdown.Item>
           <Dropdown.Item onClick={() => manageSortType("price_desc")} value="prices_desc"> Precio Descendente </Dropdown.Item>
           <Dropdown.Item onClick={() => manageSortType("relevance")} value="relevance"> Relevancia</Dropdown.Item>
        </DropdownButton>
        </span>
      </div>
      </div>
      <div>
          PAgination

      </div>
      </div>
)
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        conditions: state.conditions,
        limit: state.searchLimit,
        foundedProducts : state.foundedProducts,
        pagesQ: state.pagesQ,
        selectedPage: state.selectedPage,
        sortingType:state.sortingType,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return{
          getSortedProd: (searchTerm,sortingType, limit)=>{
            fetch(`http://localhost:3001/api/search?q=${searchTerm}&s=${sortingType}&l=${limit}`)
            .then(response => response.json())
            .then( results=>dispatch(setSearchProducts(results)))
            .catch(error => console.log('error', error));
          }
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ArrangeContainer);