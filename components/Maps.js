import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { db } from '../database/Firebase';

export default function Map () {
    const [markers, setMarkers] = useState([]); // Son los marcadores que aparecen en el mapa
    const citiesRef = db.ref().child('cities');

    useEffect(() => {
        citiesRef.orderByKey().on('value', (snapshot) => {
            var allMarkers = [];
            snapshot.forEach((child) => {
                allMarkers.push(child.val());
            });
            setMarkers(allMarkers);
            console.log(allMarkers)
        });
    }, []);

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -34.636515845724354,
                longitude: -58.479279083582114,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.route}
                    coordinate={{ latitude : marker.latitude, longitude : marker.longitude }}
                    title={marker.name}
                    // description={'Presiona para ver la temperatura.'}
                    onPress={() => getCity(marker.name)}
                />
            ))}
        </MapView>
    );
};
  
const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
