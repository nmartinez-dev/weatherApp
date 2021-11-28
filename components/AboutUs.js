import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import References from './References';
import Feedback from './Feedback';
import Background from '../assets/img/playa.jpg';

export default function AboutUs () {
    const { colors } = useTheme();

    // estados que permiten ver el feedback y los enlaces
    // a las librerias y packages utilizados.
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <ImageBackground
            source={Background}
            resizeMode='cover'
            style={styles.image}
        >
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.txtContainer}>
                    <Text style={styles.aboutTitle}>
                        Sobre nosotros
                    </Text>
                    <Text style={styles.textAbout}>
                        Comenzamos siendo dos grupos diferentes de los cuales los integrantes 
                        se fueron dándo de baja. Esa dificultad nos llevó a ver nuestras opciones 
                        y logramos fusionar los dos equipos quedando en el nuevo grupo un integrante 
                        de un equipo y dos del otro. Iniciamos el proyecto con una puesta en común 
                        de nuestros conocimientos. En adelante comenzamos a trabajar apoyándonos en 
                        los puntos fuertes y llevando de forma colaborativa los demás aspectos del 
                        proyecto. Finalizándolo satisfactoriamente, nos ayudó a sumar nuevas 
                        habilidades para nuestro entorno profesional y personal.
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.btnContainer}>
                        <Button
                            title='Referencias'
                            buttonStyle={[styles.btn, colors.background]}
                            onPress= {() => setIsVisible(true)}
                        />
                        <Button
                            title='Feedback!'
                            buttonStyle={[styles.btn, colors.background]}
                            onPress={() => setVisible(true)}
                        />
                    </View>
                    <References isVisible={isVisible} setIsVisible={setIsVisible} />
                    <Feedback visible={visible} setVisible={setVisible} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    scrollStyle:{
        flex: 1,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        marginTop: 70,
        marginLeft: 3,
        marginRight: 3,
    },
    btnContainer:{
        flex: 1
    },
    txtContainer: {
        marginTop: 35,
        backgroundColor: '#ffffffb8',
        borderRadius: 10,
        marginLeft: 7,
        marginRight: 7,
        paddingVertical: 10,
        padding: 10
    },
    btn: {
        margin: 10,
        borderRadius: 8,
    },
    textAbout:{
        marginTop: 10,
        fontSize: 18,
        textAlign: 'justify',
        marginLeft: 10,
        marginRight: 10,
    },
    aboutTitle:{
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
    },
    image: {
        flex: 1,
    },
});
