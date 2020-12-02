import Carousel from 'nuka-carousel';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { setRegions, setCategories, setSelected ,setSelectedCat, setSubCat} from '../Store/actions';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'


const MainContainer = () => {
  return <Home/>
}


const Home = () => (
  <div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
    categories: state.categories,
    selReg: state.selReg,
    selectedCat : state.selectedCat,
    catDetails: state.catDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

