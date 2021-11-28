import React, { useRef } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-easy-toast';

export default function Settings () {
    const toastRef = useRef();

    // guardamos el color que el usuario elija
    // en la configuracion de la app de forma local
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('color', jsonValue);
            await AsyncStorage.setItem('defaultColor', '#188ea8');
            toastRef.current.show('Color guardado', 1000);
        } catch (e) {
            toastRef.current.show('Fallo al guardar', 1000);
        };
    };


    // confirmacion del color que se elige para la app
    function selectedColor (color) {
        Alert.alert(
            '¿Desea cambiar el color de la app?', color,
            [{
                text: 'Cambiar',
                onPress: () => storeData(color),
            },
            {
                text: 'Cancelar',
                style: 'cancel',
            }],
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> ¡ Elige el color de tu app ! </Text>
            <ColorPicker
                defaultColor='#188ea8'
                onColorSelected={(color) => selectedColor(color)}
                style={styles.colorPicker}
            />
            <Text> Presiona el centro para guardar. </Text>
            <Toast
                ref={toastRef}
                position='center'
                opacity={0.9}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    colorPicker: {
        width: '80%',
        height: '80%',
        marginBottom: 10,
    },
});
