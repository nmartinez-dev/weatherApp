import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';

LogBox.ignoreAllLogs();

export default function App() {
    return (
        <Navigation />
    );
};
