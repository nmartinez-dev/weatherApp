import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { db } from '../database/Firebase';

export default function AddCity ({ navigation }) {
    const [cityName, setCityName] = useState('');
    const toastRef = useRef();

    const citiesRef = db.ref().child('cities');

    function addCity () {
        if (!cityName) {
            toastRef.current.show('Campo obligatorio', 1000);
        } else {
            citiesRef.push({
                title: cityName,
                route: citiesRef.push().key,
                latitud: 'aca va la latitud del marker en el mapa',
                longitud: 'aca va la longitud del marker en el mapa',
            });
            navigation.goBack();
        };
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder='Ciudad'
                containerStyle={styles.input}
                onChange={(e) => setCityName(e.nativeEvent.text)}
                rightIcon={{
                    type: 'material-community',
                    name: 'city',
                    color: '#b3b3b3',
                }}
            />
            <Button
                title='Agregar'
                buttonStyle={styles.btn}
                onPress={addCity}
            />
            <Toast
                ref={toastRef}
                position='center'
                opacity={0.9}
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
    input: {
        width: '80%',
        margin: 10,
    },
    btn: {
        backgroundColor: '#188ea8',
        margin: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
    },
});
