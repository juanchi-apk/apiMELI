import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { setRegions, setCategories, setSelected ,setSelectedCat, setSubCat} from '../Store/actions';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'




const FlexDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
background-color:yellow;
`;
/*
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`; */

const CatContainer = ({ catDetails, getRegions, regions, getCategories, categories, selReg, getCatDetails ,selectedCat}) => {

  const [selectedRegion, setselectedRegion] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  useEffect(() => {
    getRegions()
  }, []);

  console.log(categories);

  console.log(selectedCat);

  useEffect(() => {
    getCategories(selectedRegion)
  }, [selectedRegion]);

  useEffect(() => {
    getCatDetails(selectedCategory)
  }, [selectedCategory]);

  let titleaux = "Elija el país en el que quiere operar";
  let titlecataux= "Elija la categoria";
  
  if (selReg) {
    titleaux = selReg.name;
  }
  if(selectedCat){
    titlecataux=selectedCat.name
  }

  return <CategoryCont
      carDet= {catDetails} regions={regions} onRegionSelected={setselectedRegion} categories={categories} onSelectedCategory={setselectedCategory} selreg={titleaux} selectedCat={titlecataux} />
}


const CategoryCont = ({ regions, onRegionSelected, categories, selreg , onSelectedCategory, selectedCat}) => (
  <div>
    <FlexDiv>
      <div>
        <DropdownButton variant="info" id="dropdown-button-drop-right" drop="right" title={selreg}>


          {regions !== undefined && regions.map((region) => <Dropdown.Item key={region.id} onClick={() => onRegionSelected(region)}>{region.name}</Dropdown.Item>)}
        </DropdownButton>
      </div>

      <div>
        {
          categories !== undefined && (
            <DropdownButton variant="info" id="dropdown-button-drop-down" drop="down" title={selectedCat}>
              {categories.map((cat) => <Dropdown.Item key={cat.id} onClick={() => { onSelectedCategory(cat)}}>{cat.name}</Dropdown.Item>)}
            </DropdownButton>

          )
        }

      </div>
    </FlexDiv>
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
    getRegions: () => {
      fetch("http://localhost:3001/region")
        .then(response => response.json())
        .then(result => dispatch(setRegions(result)))
        .catch(error => console.log('error', error));

    },
    getCategories: (countryId) => {
      dispatch(setSelected(countryId))
      fetch(`http://localhost:3001/categories/${countryId.id}`)
        .then(response => response.json())
        .then(result => dispatch(setCategories(result)))
        .catch(error => console.log('error', error));
    },
    getCatDetails: (selCat) => {
    dispatch(setSelectedCat(selCat))
        fetch(`http://localhost:3001/categories/details/${selCat.id}`)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          dispatch(setSubCat(result))}
          )
        .catch(error => console.log('error', error));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);
