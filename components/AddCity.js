import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../database/Firebase';

export default function AddCity ({ navigation }) {
    const citiesRef = db.ref().child('cities');
    
    const [city, setCity] = useState({}); // Se almacena el nombre de la ciudad, latitud y longitud

    // pushCity tomas los datos geograficos de la ciudad seleccionada
    const pushCity = (data, details) => { 
        setCity({
            name: data.description,
            longitude: details.geometry.location.lng,
            latitude: details.geometry.location.lat,
        });
    };
    
    // Confirma o cancela la ciudad seleccionada
    const confirm = (city) => {
        Alert.alert(
            '¿Desea guardar la ciudad?', city.name,
            [{
                text: "Guardar",
                onPress: () => addCity(city),
            },
            { 
                text: "Cancelar",
                style: "cancel",
            }]
        );
    };

    // Al confirmar, se guardan los datos en la base y la ciudad aparece en la lista
    function addCity (city) {
        citiesRef.push({
            name: city.name,
            route: citiesRef.push().key,
            latitude: city.latitude,
            longitude: city.longitude,
        });
        navigation.goBack();
    };
    
    // Cuando detecta un cambio en city, comienza el proceso de almacenamiento en la base
    useEffect(() => {
        if (city.name) {
            confirm(city);
        };
    }, [city]);

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Buscar'
                fetchDetails={true}
                onPress={(data, details = null) => pushCity(data, details)}
                query={{ key: 'YOUR_API_KEY', language: 'es' }}
                styles={{
                    description: {
                        fontWeight: 'bold',
                    },
                    container: {
                        position:'absolute',
                        alignSelf: 'center',
                        width: '90%',
                        marginTop: 50,
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000022',
        height: '100%',
    },
});
