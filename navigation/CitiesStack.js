import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cities from '../components/Cities';
import AddCity from '../components/AddCity';

const Stack = createStackNavigator();

export default function CitiesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='cities'
                component={Cities}
                options={{ title: 'Ciudades',
                        headerTitleAlign:'center',
                        headerStyle:{
                          backgroundColor:'#188ea8'
                        },
                        headerTintColor:'#FFF',
                        headerTitleStyle:{
                          fontWeight:'bold'
                        },
                        }}
            />
            <Stack.Screen
                name='add-city'
                component={AddCity}
                options={{ title: 'Agregar Ciudad',
                        headerTitleAlign:'center',
                        headerStyle:{
                          backgroundColor:'#188ea8'
                        },
                        headerTintColor:'#FFF',
                        headerTitleStyle:{
                        fontWeight:'bold'
                        },
                        }}
            />
        </Stack.Navigator>
    );
};
