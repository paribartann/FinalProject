import { ADD_CATEGORY } from './action_types';

const addCategories = (category) => ({
   type: ADD_CATEGORY,
   payload: category
});


export default addCategories;