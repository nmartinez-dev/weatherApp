import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../database/Firebase';

export default function AddCity (props) {
    const { isVisible, setIsVisible } = props;
    const citiesRef = db.ref().child('cities');
    
    const [city, setCity] = useState({});

    const pushCity = (data, details) => {
        setCity({
            name: data.description,
            longitude: details.geometry.location.lng,
            latitude: details.geometry.location.lat,
        });
    };
    
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
    
    function addCity (city) {
        citiesRef.push({
            name: city.name,
            route: citiesRef.push().key,
            latitude: city.latitude,
            longitude: city.longitude,
        });
        setIsVisible(false);
    };

    useEffect(() => {
        if (city.name) {
            confirm(city);
        };
    }, [city]);

    return (
        <Overlay
            isVisible={isVisible}
            backdropStyle={{ backgroundColor: '#00000030' }}
            overlayStyle={styles.overlay}
            onBackdropPress={() => setIsVisible(false)}
        >
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Buscar ciudad </Text>
                    <Icon
                        type='material-community'
                        name='close'
                        color='#000'
                        size={25}
                        onPress={() => setIsVisible(false)}
                    />
                </View>
                <GooglePlacesAutocomplete
                    placeholder='Buscar'
                    fetchDetails={true}
                    onPress={(data, details = null) => pushCity(data, details)}
                    query={{ key: 'AIzaSyAs2mTAS8Kg1R3RatIiWaEBU3SRtk4Y0CA', language: 'es' }}
                    styles={{
                        description: {
                            fontWeight: 'bold',
                        },
                        container: {
                            position:'absolute',
                            width: '100%',
                            marginTop: 50,
                        },
                    }}
                />
            </View>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    overlay: {
        height: '90%',
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#c2c2c2f2',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
