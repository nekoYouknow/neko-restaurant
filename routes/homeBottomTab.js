import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/home';
import ExploreScreen from '../screens/explore';
import ProfileScreen from '../screens/profile';


import React from 'react';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

const screens = {
    Home: {
        screen: HomeScreen, 
        navigationOptions: {
            tabBarLabel: 'Home', 
            tintColor: '#459D72',
            tabBarIcon: ({focused, tintColor}) => {
                return <MaterialIcons name="home" style={{fontSize: 26}} color={tintColor} />
            }, 
            indicatorStyle: {
                borderWidth: 1, 
                borderColor: '#ffaabb'
            }
        }
    },
    Explore: {
        screen: ExploreScreen, 
        navigationOptions: {
            tabBarLabel: 'Explore', 
            tintColor: '#459D72',
            tabBarIcon: ({focused, tintColor}) => {
                return <MaterialIcons name="search" style={{fontSize: 26}} color={tintColor} />
            }
        }
    },
    Profile: {
        screen: ProfileScreen, 
        navigationOptions: {
            tabBarLabel: 'Profile', 
            tintColor: '#459D72',
            tabBarIcon: ({focused, tintColor}) => {
                return <MaterialCommunityIcons name="account" style={{fontSize: 26}} color={tintColor} />
            }
        }
    },
};

const options = {
    tabBarOptions: {
        activeTintColor: '#459D72', 
        inactiveTintColor: '#A0A0A0', 
        tabStyle: {
            // borderBottomWidth: 0, 
        },
        showLabel: true, 
        showIcon: true 
    }
};

export default createBottomTabNavigator(screens, options);