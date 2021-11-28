import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { db } from '../database/Firebase';

export default function Map () {
    const [markers, setMarkers] = useState([]);
    const citiesRef = db.ref().child('cities');

    useEffect(() => {
        citiesRef.orderByKey().on('value', (snapshot) => {
            var allMarkers = [];
            snapshot.forEach((child) => {
                allMarkers.push(child.val());
            });
            setMarkers(allMarkers);
        });
    }, []);

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -37.16857202766671,
                longitude: -57.12814386981829,
                latitudeDelta: 2,
                longitudeDelta: 2,
            }}
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.route}
                    coordinate={{ latitude : marker.latitude, longitude : marker.longitude }}
                    title={marker.name}
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
