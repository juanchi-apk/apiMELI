import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSearchKey, setSearchProducts} from '../Store/actions';

const NavStyle = styled.div`
    background: #4f42ff;
    display: flex;
    justify-content: space-between;
     `;

const SearchStyle = styled.span`
      width : 50%;
      float: left;
  
`;

const NavContainer = ({setSearch, searchTerm, searchItems, limit}) => {
    
    var handleChange = (value) => {
    setSearch(value);
    }

    var handleSearchClick = (event) => {
        event.preventDefault();
        searchItems(searchTerm, limit)
    }
    
    return <Navbar handleForm={handleChange} clickHandler={handleSearchClick}/>

}


const Navbar = ({ handleForm, clickHandler}) => {

    return (
        <NavStyle>
            <span>
                <a>Logo</a>
                <span id="MELIWIZZ_ICON" > MeLiWIZZ </span>
            </span>


            <SearchStyle>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search..." onChange={(event)=>handleForm(event.target.value)} />
                            <a onClick= {clickHandler} className="search_icon"><i className="fas fa-search" ></i></a>
                        </div>
                    </div>
                </div>

            </SearchStyle>

        </NavStyle>
 
    )
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm ,
        limit: state.searchLimit,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSearch: (searchvalue)=> {
            dispatch(setSearchKey(searchvalue))
        },
        searchItems:(searchTerm, limit)=>{
            fetch(`http://localhost:3001/api/search?q=${searchTerm}&l=${limit}`)
            .then(response => response.json())
            .then( results=>dispatch(setSearchProducts(results)))
            .catch(error => console.log('error', error));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
