import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../database/Firebase';

export default function AddCity ({ navigation }) {
    const [cityName, setCityName] = useState(0);
    const toastRef = useRef();

    const citiesRef = db.ref().child('cities');

    function addCity (lat, lng) {
        
        setCityName({lat: lat, lng: lng})
        console.log(cityName)
        };
    

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
        //     onPress={(data, details = null) => setCityName(typeof(
        //     details.geometry.location.lat)
        // )}
            onPress={(data, details = null) => setCityName({
              lat: details.geometry.location.lat,
              lng: details.geometry.location.lng,
            })}
            query={{
                key: 'AIzaSyAs2mTAS8Kg1R3RatIiWaEBU3SRtk4Y0CA',
                language: 'es',
                
      }}
            styles={{
                container: { position:'absolute', width:"100%" },
                listView: { backgroundColor: "white" },

            }}
    />
 
            <Toast
                ref={toastRef}
                position='center'
                opacity={0.9}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        margin: 10,
    },
    btn: {
        backgroundColor: '#188ea8',
        margin: 10,
        borderRadius: 8,
        paddingHorizontal: 20,
    },
});
