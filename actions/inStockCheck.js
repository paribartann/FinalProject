import { SHOW_INSTOCK } from './action_types';

const inStockCheck = (inStock) => ({
   type: SHOW_INSTOCK,
   payload: inStock
});


export default inStockCheck;