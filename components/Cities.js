import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert, Text, ImageBackground } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { db } from '../database/Firebase';
import Background from '../assets/img/playa.jpeg';
import Loading from '../utils/Loading';
import Weather from './Weather';

export default function Cities ({ navigation }) {
    const { colors } = useTheme();

    const [cities, setCities] = useState([]);
    const [req, saveReq] = useState({});
    const [name, saveName] = useState({});
    const [main, saveMain] = useState({});
    const [weather, saveWeather] = useState('Buenos Aires');
    const [status, saveStatus] = useState(false);
    const [bgcolor, guardarBgcolor] = useState('rgb(71, 149, 212)');
    const [visibleWeather, setVisibleWeather] = useState(false);

    const citiesRef = db.ref().child('cities');

    const removeCity = (route, title) => {       // resolver: no se puede eliminar el ultimo agregado
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
            })
            setCities(allCities);
        });
    }, []);

    const getCity = (city) => {
        setVisibleWeather(true);
        saveWeather(city);
        saveStatus(true);
    };

    const bgColorApp = { backgroundColor:bgcolor }

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
                <View style={styles.container}>
                    <ScrollView>
                        {
                            cities.map((city) => {
                                return(
                                <>
                                    <View key={city.route}>
                                        <ListItem
                                            onPress={() => getCity(city.title)}
                                            bottomDivider={true}
                                        >
                                            <ListItem.Content>
                                                <ListItem.Title> {city.title} </ListItem.Title>
                                            </ListItem.Content>
                                            <Icon
                                                reverse
                                                type='material-community'
                                                name='close'
                                                color='#b3b3b3'
                                                reverseColor='#fff'
                                                size={9}
                                                containerStyle={{ margin: 0 }}
                                                onPress={() => removeCity(city.route, city.title)}
                                            />
                                        </ListItem>
                                    </View>
                                </>
                                );
                            })
                        }
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
                        color='#188ea8'
                        containerStyle={styles.addCities}
                        onPress={() => navigation.navigate('add-city')}
                    />
                </View>
            </ImageBackground>
        );
    };
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent:'center',
    },
    addCities: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    list:{
        backgroundColor: '#ffffffb8',
        borderRadius: 50,
    },
});
