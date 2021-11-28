import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, Alert, ImageBackground, View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import { db } from '../database/Firebase';
import Background from '../assets/img/playa.jpg';
import Loading from '../utils/Loading';
import Weather from './Weather';

export default function Cities ({ navigation }) {
    const { colors } = useTheme();

    const toastRef = useRef();

    const [cities, setCities] = useState(['empty']);
    const [weather, saveWeather] = useState('Buenos Aires');
    const [status, saveStatus] = useState(false);
    const [visibleWeather, setVisibleWeather] = useState(false);

    const citiesRef = db.ref().child('cities');


    // Elimina la ciudad elegida de la lista
    const removeCity = (route, title) => {       

        Alert.alert(
            '¿Desea eliminar la ciudad?', title,
            [{
                text: 'Eliminar',
                onPress: () => citiesRef.child(route).remove(),
            },
            {
                text: 'Cancelar',
                style: 'cancel',
            }],
        );
    };

    useEffect(() => {
        citiesRef.orderByKey().on('value', (snapshot) => {
            var allCities = [];
            snapshot.forEach((child) => {
                allCities.push(child.val());
                citiesRef.child(child.key).update({route: child.key});
            });
            setCities(allCities);
        });
    }, []);

    // Muestra en clima en la ciudad seleccionada
    const getCity = (city) => {
        setVisibleWeather(true);
        saveWeather(city);
        saveStatus(true);
    };

    
    // Al iniciar la pagina, carga las ciudades que se encuentran en la base
    if (cities == 'empty') {

        return (
            <Loading isVisible={true} text='Cargando ciudades...' theme={colors} />
        );
    } else if (cities == '') {
        return (
            <ImageBackground
                source={Background}
                resizeMode='cover'
                style={styles.image}
            >
                <View style={styles.noCitiesContainer}>
                    <Text style={styles.noCities}> No hay ciudades agregadas. </Text>  
                </View>
                <Icon
                    reverse
                    type='material-community'
                    name='plus'
                    color={colors.text.color}
                    containerStyle={styles.addCities}
                    onPress={() => navigation.navigate('add-city')}
                />
            </ImageBackground>
        );
    } else {
        return (
            <ImageBackground
                source={Background}
                resizeMode='cover'
                style={styles.image}
            >
                <ScrollView style={{backgroundColor: '#00000050'}}>
                    {cities.map((city) => {
                        return (
                            <ListItem
                                onPress={() => getCity(city.name)}
                                bottomDivider={true}
                                onLongPress={() => removeCity(city.route, city.name)}
                                key={city.route}
                                containerStyle={{ backgroundColor: '#ffffffd0' }}
                            >
                                <ListItem.Content style={styles.item}>
                                    <ListItem.Title style={styles.cityName}> {city.name} </ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        );
                    })}
                    <Weather
                        weather={weather}
                        saveWeather={saveWeather}
                        status={status}
                        saveStatus={saveStatus}
                        visibleWeather={visibleWeather}
                        setVisibleWeather={setVisibleWeather}
                    />
                </ScrollView>
                <Icon
                    reverse
                    type='material-community'
                    name='plus'
                    color={colors.text.color}
                    containerStyle={styles.addCities}
                    onPress={() => navigation.navigate('add-city')}
                />
                <Toast
                    ref={toastRef}
                    position='center'
                    opacity={0.9}
                />
            </ImageBackground>
        );
    };
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    noCitiesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffa0',
    },
    noCities: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    cityName: {
        marginLeft: 5,
    },
    addCities: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});
