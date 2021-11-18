import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map () {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -34.636515845724354,
                longitude: -58.479279083582114,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
};
  
const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
