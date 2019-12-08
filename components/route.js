import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './mainScreen';
import DisplayScreen from './displyOptionScreen';
import ProductDisplay from './productDisplay';
import AddForm from './addForm';

const AppStack = createStackNavigator(
  {
  Home : MainScreen,
  Display: DisplayScreen,
  Products: ProductDisplay,
  Form: AddForm
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#434343',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    }
  }

)

const Route = createAppContainer(AppStack);

export default Route;