import { SEARCH_PRODUCT } from './action_types';

const searchProduct = (value) => ({
   type: SEARCH_PRODUCT,
   payload: value
});


export default searchProduct;