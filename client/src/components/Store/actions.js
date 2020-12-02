//import {GETREGIONS} from './actiontypes';
import {SET_REGIONS} from './actiontypes';
import {SET_CATEGORIES} from './actiontypes';
import {SET_SELECTED} from './actiontypes';
import {SET_SELECTED_CAT} from './actiontypes';
import {GET_CAT_DETAIL} from './actiontypes';
import {SET_SEARCH_KEY} from './actiontypes';
import {SET_SEARCH_PRODUCTS} from './actiontypes';



/*export function GetRegions(){
    return function(dispatch){
        return fetch(`http://localhost:3001/region`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GETREGIONS, payload: json })
            });
    }
}*/

export function setRegions(regions) {
   return { type: SET_REGIONS, payload:{regions}}
}

export function setCategories(categories) {
     return { type: SET_CATEGORIES, payload:{categories}}
 }

 export function setSelected(countryId) {
    return { type: SET_SELECTED, payload:{countryId}}
}

export function setSelectedCat(selcat) {
    
    return { type: SET_SELECTED_CAT, payload:{selcat}}
}

export function setSubCat(catDetail) {
    
    return { type: GET_CAT_DETAIL, payload:{catDetail}}
}

export function setSearchKey(searchKey) {
    
    return { type: SET_SEARCH_KEY, payload:{searchKey}}
}

export function setSearchProducts(searchResults) {
    
    return { type: SET_SEARCH_PRODUCTS, payload:{searchResults}}
}