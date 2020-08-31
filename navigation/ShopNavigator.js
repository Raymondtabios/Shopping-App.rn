import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native'

import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductsOverViewScreen from '../screens/shop/ProductsOverViewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator ({
    ProductsOverview : ProductsOverViewScreen,
    ProductDetail : ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: 
            Platform.OS === 'android' 
            ? Colors.blue
            : Colors.clear,
            
        },headerTitleStyle:{
            fontFamily: 'open-sans-bold',
            fontFamily: 22
        },headerBackTitle:{
           fontFamily: 'open-sans' 
        },
        headerTintColor: 
            Platform.OS === 'android' 
            ? Colors.clear
            : Colors.blue,
    } 
  }
);

export default createAppContainer(ProductsNavigator);