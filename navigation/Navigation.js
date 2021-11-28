import React from "react";
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import CitiesStack from './CitiesStack';
import Maps from '../components/Maps';
import AboutUs from '../components/AboutUs';

const Tab = createMaterialBottomTabNavigator();

// función para seleccionar el ícono del tab navigation
function screenOptions (route, color) {
    let iconName;

    switch (route.name) {
        case 'home-stack':
            iconName='home'
            break;
        case 'cities-stack':
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

export default function Navigation (props) {
    const { theme } = props;

    // propagamos tema en navigation
    const MyTheme = {
        colors: {
            background: theme.backgroundColor,
            text: theme.color,
            border: theme.borderColor,
        },
    };

    return (
        <NavigationContainer theme={MyTheme} >
            <Tab.Navigator
                initialRouteName='home-stack'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
                barStyle={theme.backgroundColor}
            >
                <Tab.Screen
                    name="home-stack"
                    component={HomeStack}
                    options={{ title: 'Home' }}
                />
                <Tab.Screen
                    name="cities-stack"
                    component={CitiesStack}
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
