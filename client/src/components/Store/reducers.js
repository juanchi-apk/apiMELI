import { SET_SEARCH_PRODUCTS, GETREGIONS, SET_REGIONS, SET_CATEGORIES, SET_SELECTED, SET_SELECTED_CAT, GET_CAT_DETAIL, SET_SEARCH_KEY } from './actiontypes';

const initialState = {
    init: [],
    searchTerm: "zapatillas",
    searchOffset : 0,
    searchLimit : 6,
    pagesQ:[],
    selectedPage: 1,
};




export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        /*  case GETREGIONS:
             console.log(action.payload);
             return {
                 ...state,
             }; */
             case SET_SEARCH_PRODUCTS:
                    console.log(action.payload.searchResults);
                    console.log(action.payload.searchResults.paging.primary_results)
                    console.log(action.payload.searchResults.paging.total)
                    let pagaux= action.payload.searchResults.paging.primary_results;
                    let divi = state.searchLimit||initialState.searchLimit;
                    let totalPages = Math.ceil(pagaux/divi);
                    console.log(totalPages);
                    console.log(divi)
                    let products;
                    if(action.payload.searchResults.query==="undefined"){
                        products=null
                    } else {
                        products=action.payload.searchResults
                    };
                    let typeconditions=Array.from(new Set (products.results.map( product => product.condition)))
                   return {
                    ...state,
                    foundedProducts: products,
                    conditions:typeconditions,
                    pagesQ: totalPages,
                    }
             case SET_SEARCH_KEY:
         
                   return {
                    ...state,
                    searchTerm: action.payload.searchKey
                    }
        case GET_CAT_DETAIL:
            
                   return {
                    ...state,
                    catDetail: action.payload.catDetail
        }
        case SET_SELECTED_CAT:
               return {
                ...state,
                selectedCat: action.payload.selcat
            }
        case SET_SELECTED:
            return {
                ...state,
                selReg: action.payload.countryId
            }
        case SET_REGIONS:
            let all_Regions = [];
            action.payload.regions.forEach(element => {
                all_Regions.push(element)
            });
            return {
                ...state,
                regions: all_Regions
            }
        case SET_CATEGORIES:
            let all_Categories = [];
            action.payload.categories.forEach(element => {
                all_Categories.push(element)
            });
            return {
                ...state,
                categories: all_Categories,

            }
        default:
            return state
    }
}


