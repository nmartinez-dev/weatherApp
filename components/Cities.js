import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { db } from '../database/Firebase';

export default function Cities ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text> En este componente se muestran las ciudades </Text>
            <Icon
                reverse
                type='material-community'
                name='plus'
                color='#567aba'
                containerStyle={styles.addCities}
                onPress={() => navigation.navigate('add-city')}
            />
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
    addCities: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});
