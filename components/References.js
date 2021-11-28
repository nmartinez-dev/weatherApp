import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Overlay, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export default function References (props) {
    const { isVisible, setIsVisible } = props;
    const { colors } = useTheme();

    //en este sector tenemos las referencias de todo lo que usamos
    //para poder llevar a delante el proyecto de la app.
    //encontraremos las fuetnes de todas las liubrerias y packages utilizados.
    //solo falta agregar la libreria de googlemaps. que por una cuestion de
    //longitud del enlace decidimos no agregar para no afectar a la visualizacion
    //del componente.
    return (
        <Overlay
            isVisible={isVisible}
            backdropStyle={{ backgroundColor: '#00000030' }}
            overlayStyle={[styles.overlay, colors.background]}
            onBackdropPress={() => setIsVisible(false)}
        >
            <View style={styles.overlayTitle}>
                <Text style={styles.title}> Bibliotecas y Frameworks </Text>
            </View>
            <View style={styles.overlayContent}>
                <Text style={styles.overlayContentTitle}> Expo: </Text>
                <Text onPress={() => Linking.openURL('https://expo.dev')} style={styles.overlayContentText}>
                    https://expo.dev/
                </Text>
                <Text style={styles.overlayContentTitle}> React Native: </Text>
                <Text onPress={() => Linking.openURL('https://reactnative.dev/')} style={styles.overlayContentText}>
                    https://reactnative.dev/
                </Text>
                <Text style={styles.overlayContentTitle}> React Navigation: </Text>
                <Text onPress={() => Linking.openURL('https://reactnavigation.org/')} style={styles.overlayContentText}>
                    https://reactnavigation.org/
                </Text>
                <Text style={styles.overlayContentTitle}> React Native Elements: </Text>
                <Text onPress={() => Linking.openURL('https://reactnativeelements.com/')} style={styles.overlayContentText}>
                    https://reactnativeelements.com/
                </Text>
            </View>
            <Button
                title='Cerrar'
                titleStyle={{ color: '#000' }}
                buttonStyle={[styles.closeOverlay, colors.background]}
                onPress= {() => setIsVisible(false)}
                icon={
                    <Icon
                        type='material-community'
                        name='close'
                        color='#000'
                        size={17}
                    />
                }
            />
        </Overlay>
    );
};

const styles = StyleSheet.create ({
    overlay: {
        height: 'auto',
        width: 'auto',
        padding: 30,
        borderRadius: 8,
    },
    overlayTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlayContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContentTitle: {
        fontWeight: 'bold',
        marginTop: 20,
    },
    overlayContentText: {
        textDecorationLine: 'underline',
    },
    closeOverlay: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 40,
    },
});
