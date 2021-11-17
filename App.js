import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { LogBox, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animate from './utils/Animate';

LogBox.ignoreAllLogs();         // quitar antes de renderizar

export default function App() {
    const [theme, setTheme] = useState({
        color: {color: '#188ea8'},
        backgroundColor: {backgroundColor: '#188ea8'},
        borderColor: {borderColor: '#188ea8'},
    });

    const getColor = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('color');
            setTheme({
                color: {color: JSON.parse(jsonValue)},
                backgroundColor: {backgroundColor: JSON.parse(jsonValue)},
                borderColor: {borderColor: JSON.parse(jsonValue)},
            });
        } catch (e) {
            setTheme(theme);
        };
    };

    // getColor();

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor={theme.backgroundColor.backgroundColor}
                barStyle="light-content"
            />
            <Animate theme={theme} />
        </>
    );
};
