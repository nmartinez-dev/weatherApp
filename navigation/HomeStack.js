import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import Home from '../components/Home';
import Settings from '../components/Settings';

const Stack = createStackNavigator();

export default function HomeStack () {
    const { colors } = useTheme();
    
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen
                name='home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='settings'
                component={Settings}
                options={{
                    title: 'Configuración',
                    headerTitleAlign: 'center',
                    headerStyle: colors.background,
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight:'bold' },
                }}
            />
        </Stack.Navigator>
    );
};
