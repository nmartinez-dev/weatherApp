import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert, ImageBackground, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { db } from '../database/Firebase';
import Background from '../assets/img/playa.jpeg';
import Loading from '../utils/Loading';
import Weather from './Weather';

export default function Cities ({ navigation }) {
    const { colors } = useTheme();

    const [cities, setCities] = useState([]);
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
    if (cities == '') {
        return (
            <Loading isVisible={true} text='Cargando ciudades...' theme={colors} />
        );
    } else {
        return (
            <ImageBackground
                source={Background}
                resizeMode='cover'
                style={styles.image}
            >
                <Text style={[styles.title, colors.background]}> Ciudades </Text>
                <ScrollView>
                    {cities.map((city) => {
                        return (
                            <>
                                <View key={city.route}>
                                    <ListItem
                                        onPress={() => getCity(city.name)}
                                        bottomDivider={true}
                                        onLongPress={() => removeCity(city.route, city.name)}
                                    >
                                        <ListItem.Content>
                                            <ListItem.Title> {city.name} </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                </View>
                            </>
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
            </ImageBackground>
        );
    };
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
    },
    addCities: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});
