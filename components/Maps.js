import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AboutUs from './AboutUs';

export default function Map () {
    return (
        <View style={{marginTop: 0, flex:1}}>
        
          <MapView style={styles.map}
                initialRegion={{
                        latitude: -34.636515845724354,
                        longitude: -58.479279083582114,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
          }}                        
                >
              
        </MapView >    

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });
