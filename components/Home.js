import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Background from '../assets/img/playa.jpeg';

export default function Home () {
    return (
        <ImageBackground
            source={Background}
            resizeMode='cover'
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.title}> ¡ WeatherApp !</Text>
                <Text style={styles.subtitle}> -- Consulta el clima de tu ciudad favorita -- </Text>
                <View style={styles.useContainer}>
                    <Text style={styles.useTitle}> Modo de uso: </Text>
                    <Text> - Paso 1: Vé a la sección de ciudades y agrega una ciudad al listado. </Text>
                    <Text> - Paso 2: Localiza tu ciudad en el mapa. </Text>
                    <Text> - Paso 3: Consulta la temperatura de la ciudad agregada. </Text>
                    <Text style={styles.useLetsGoTitle}> ¡Listo! </Text>
                    <Text style={styles.useLetsGoSubtitle}>
                        ¡Tus ciudades aparecerán en la lista y podrás consultar la 
                        temperatura cuando lo desees!
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#ffffffb8',
        paddingVertical: 50,
        width: '85%',
        borderRadius: 8,
    },
    title: {
        color: '#188ea8',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#188ea8',
        fontSize: 16,
    },
    useContainer: {
        alignItems: 'flex-start',
        width: '95%',
        marginTop: 50,
        color: '#fff',
    },
    useTitle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    useLetsGoTitle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    useLetsGoSubtitle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});
