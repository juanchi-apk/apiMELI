import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import { setSearchProducts} from '../../Store/actions';
import 'bootstrap/dist/css/bootstrap.css';

const PagContainer = ({ searchTerm, limit, sortingType, pagesQ, getSortedProd, pageList}) => {

let setPageOffset = (PageNumber) =>{
let newoffset=(PageNumber*limit)-limit
getSortedProd(searchTerm, sortingType, limit,newoffset);

}



  return <PageSelect setPages={setPageOffset} quantity={pageList}/>
}


const PageSelect = ({setPages, quantity }) => (
  <div>
  {
    quantity.length>0 && quantity.map((element)=>{
      return <Button variant="info" key={element+1} onClick={()=>setPages(element+1)}>{element+1}</Button> 
    })
  }
  
  </div>
)

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    conditions: state.conditions,
    limit: state.searchLimit,
    foundedProducts : state.foundedProducts,
    pagesQ: state.pagesQ,
    selectedPage: state.selectedPage,
    sortingType:state.sortingType,
    pageList:state.pageList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSortedProd: (searchTerm,sortingType, limit, offset)=>{
      fetch(`http://localhost:3001/api/search?q=${searchTerm}&s=${sortingType}&l=${limit}&o=${offset}`)
      .then(response => response.json())
      .then( results=>dispatch(setSearchProducts(results)))
      .catch(error => console.log('error', error));

  }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(PagContainer);