import {createStackNavigator} from 'react-navigation-stack';
import HomeBottomTab from './homeBottomTab';
import RestaurantScreen from '../screens/restaurant';

const screens = {
    Home: {
        screen: HomeBottomTab
    },
    Restaurant: {
        screen: RestaurantScreen
    }
};

const options = {
    headerMode: 'none'
};

export default createStackNavigator(screens, options);
