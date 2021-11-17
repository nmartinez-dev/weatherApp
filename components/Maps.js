import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AboutUs from './AboutUs';

export default function Map () {
    return (
        <View style={{marginTop: 50, flex:1, position: 'relative'}}>
        <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
            console.log(data, details);
      }}
      onFail={error => console.error(error)}
            query={{
                key: 'AIzaSyC6WedtTyL1GHPbXILRxhi59BzH81pfQ_w',
                language: 'en',
                components: "country:us",
                types: "establishment",
                radius:30000,
                
      }}
            styles={{
                container: { flex:0, position:'absolute', width:"100%", zIndex:2 },
                listView: { backgroundColor:"white" },

            }}
    />
        <MapView style={styles.map}
                initialRegion={{
                        latitude: -34.636515845724354,
                        longitude: -58.479279083582114,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
          }} 
                onPress={e => console.log(e.nativeEvent)}
                showsUserLocation={true}
                
                >
              
        </MapView >  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      marginTop:50,
    },
    map: {
      width: "100%",
      height: "100%",
      position: 'relative',
      zIndex:1
    },
  });
