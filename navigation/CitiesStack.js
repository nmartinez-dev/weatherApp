import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import Cities from '../components/Cities';
import AddCity from '../components/AddCity';

const Stack = createStackNavigator();

export default function CitiesStack () {
    const { colors } = useTheme();
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='cities'
                component={Cities}
                options={{
                    title: 'Ciudades',
                    headerTitleAlign: 'center',
                    headerStyle: colors.background,
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight:'bold' },
                }}
            />
            <Stack.Screen
                name='add-city'
                component={AddCity}
                options={{
                    title: 'Agregar Ciudad',
                    headerTitleAlign: 'center',
                    headerStyle: colors.background,
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight:'bold' },
                }}
            />
        </Stack.Navigator>
    );
};
