import { ADD_ITEMS } from './action_types';

const addItems = (object) => ({
   type: ADD_ITEMS,
   payload: object
});


export default addItems;