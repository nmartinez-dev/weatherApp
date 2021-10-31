import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Home () {
    return (
        <View style={styles.container}>
            <Text> En este componente se muestra el home </Text>
            {/* <Icon 
                type='material-community'
                name='weather-pouring'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-rainy'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-cloudy'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-lightning'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-sunny'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-partly-cloudy'
                color='grey'
            />
            <Icon 
                type='material-community'
                name='weather-hail'
                color='grey'
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
