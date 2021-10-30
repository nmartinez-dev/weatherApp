import React from "react";
import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/Home';
import Cities from '../components/Cities';
import Maps from '../components/Maps';
import AboutUs from '../components/AboutUs';

const Tab = createMaterialBottomTabNavigator();

function screenOptions (route, color) {
    let iconName;

    switch (route.name) {
        case 'home':
            iconName='home'
            break;
        case 'cities':
            iconName='city'
            break;
        case 'maps':
            iconName='earth'
            break;
        case 'about-us':
            iconName='account-group'
            break;
        default:
            break;
    };
    
    return (
        <Icon
            type='material-community'
            name={iconName}
            size={22}
            color={color}
        />
    );
};

export default function Navigation () {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
                barStyle={{ backgroundColor: '#567aba' }}
            >
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Tab.Screen
                    name="cities"
                    component={Cities}
                    options={{ title: 'Ciudades' }}
                />
                <Tab.Screen
                    name="maps"
                    component={Maps}
                    options={{ title: 'Mapa' }}                    
                />
                <Tab.Screen
                    name="about-us"
                    component={AboutUs}
                    options={{ title: 'Quienes Somos' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
