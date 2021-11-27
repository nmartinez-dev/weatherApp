import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useTheme } from '@react-navigation/native';
import Background from '../assets/img/playa.jpg';

export default function Home ({ navigation }) {
    //este es el estado que guarda la configuracion de color
    //que el usuario guarda en la pantalla home.
    const { colors } = useTheme();

    return (
        <ImageBackground
            source={Background}
            resizeMode='cover'
            style={styles.image}
        >
            <View style={styles.iconContainer}>
                <Icon
                    type='material-community'
                    name='account-cog'
                    color='#000'
                    size={30}
                    onPress={() => navigation.navigate('settings')}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={[styles.title, colors.text]}> ¡ WeatherApp !</Text>
                    <Text style={[styles.subtitle, colors.text]}>
                        -- Consulta el clima de tu ciudad favorita --
                    </Text>
                    <View style={styles.useContainer}>
                        <Text style={styles.useTitle}> Modo de uso: </Text>
                        <Text> - Paso 1: Vé a la sección de ciudades y agrega una ciudad al listado. Para eliminar una ciudad manten presionada la ciudad a eliminar.</Text>
                        <Text> - Paso 2: Localiza tu ciudad en el mapa. </Text>
                        <Text> - Paso 3: Consulta la temperatura de la ciudad agregada. </Text>
                        <Text style={styles.useLetsGoTitle}> ¡Listo! </Text>
                        <Text style={styles.useLetsGoSubtitle}>
                            ¡Tus ciudades aparecerán en la lista y podrás consultar la
                            temperatura cuando lo desees!
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    iconContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 10,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#ffffffb8',
        paddingVertical: 50,
        width: '85%',
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
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
