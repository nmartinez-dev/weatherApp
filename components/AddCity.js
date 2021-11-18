import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../database/Firebase';


export default function AddCity ({ navigation }) {
    const [cityName, setCityName] = useState({});
    const toastRef = useRef();
    
    useEffect(() => {
        if (cityName.Ciudad) {
            try { confirmar(cityName.Ciudad)
             } catch { }
        }
            
    }, [cityName])

    const pushCity = (data, details) => {
            setCityName({Ciudad:data.description,
                        Longitud:details.geometry.location.lng,
                        Latitud:details.geometry.location.lat})
        };
    
        const confirmar = (title) => {
            Alert.alert(
            '¿Desea guardar la ciudad?',
              title,
              [{
                  text: "Cancel",
                  onPress: () => console.log(cityName.Ciudad),
                  style: "cancel"
                },
                { text: "OK", onPress: () => addCity(cityName) }
              ]
            )};
    
        function addCity () {
            if (!cityName) {
                toastRef.current.show('Campo obligatorio', 1000);
            } else {
                citiesRef.push({
                    title: cityName.Ciudad,
                    route: citiesRef.push().key,
                    latitud: cityName.Latitud,
                    longitud: cityName.Longitud,
                })};
                navigation.goBack();
            }


    const citiesRef = db.ref().child('cities');


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details = null) => pushCity(data,details)}
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
