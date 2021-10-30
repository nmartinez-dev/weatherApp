import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutUs () {
    return (
        <View style={styles.container}>
            <Text> En este componente se muestra quienes somos </Text>
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
