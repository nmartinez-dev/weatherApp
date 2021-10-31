import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Animate from './utils/Animate';

LogBox.ignoreAllLogs();         // quitar antes de renderizar

export default function App() {
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#188ea8"
                barStyle="light-content"
            />
            <Animate />
        </>
    );
};
