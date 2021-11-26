import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Alert, ImageBackground, Text, Platform } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-easy-toast';
import { db, storage } from '../database/Firebase';
import Background from '../assets/img/playa.jpeg';
import Loading from '../utils/Loading';
import Weather from './Weather';

export default function Cities ({ navigation }) {
    const { colors } = useTheme();

    const toastRef = useRef();
    const [image, setImage] = useState(null);

    const [cities, setCities] = useState([]);
    const [weather, saveWeather] = useState('Buenos Aires');
    const [status, saveStatus] = useState(false);
    const [visibleWeather, setVisibleWeather] = useState(false);

    const citiesRef = db.ref().child('cities');
    const storageRef = storage.ref('avatar');

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

    const getCity = (city) => {
        setVisibleWeather(true);
        saveWeather(city);
        saveStatus(true);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        // console.log(result);
    
        if (!result.cancelled) {
            const response = await fetch(result.uri);
            const blob = await response.blob();

            let nameImage = response._bodyInit._data.name;
            
            storageRef.child(nameImage).put(blob).then(() => {
                toastRef.current.show('Imagen actualizada.', 1000);
            }).catch(() => {
                toastRef.current.show('Fallo al actualizar imagen.', 1000);
            });

            // setImage(result.uri);
            // // storageRef.put(image)
            // storageRef.put(image).then(function(snapshot) {
            //     console.log('Uploaded a blob or file!');
            // });
        };
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

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    toastRef.current.show('Permiso denegado.', 1000);
                };
            };
        })();
    }, []);

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
                                    <Avatar
                                        rounded
                                        // size={50}
                                        source={ image ? { uri: image } : require('../assets/img/avatar-default.jpg') }
                                        onPress={() => pickImage()}
                                    />
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
