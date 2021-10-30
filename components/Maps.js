import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from '../database/Firebase';

export default function Map () {
    return (
        <View style={styles.container}>
            <Text> En este componente se muestra el mapa </Text>
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
