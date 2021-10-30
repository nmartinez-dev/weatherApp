import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddCity () {
    return (
        <View style={styles.container}>
            <Text> En este componente se cargan las ciudades </Text>
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
