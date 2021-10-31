import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { db } from '../database/Firebase';

export default function Cities ({ navigation }) {
    const [cities, setCities] = useState([]);

    const citiesRef = db.ref().child('cities');

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

    useEffect(() => {
        citiesRef.orderByKey().on('value', (snapshot) => {
          var allCities = [];
          snapshot.forEach((child) => {
            allCities.push(child.val());
            citiesRef.child(child.key).update({route: child.key});
          })
          setCities(allCities);
        });
    }, []);

    return (
        <View style={styles.container}>
            {
                cities.map((city) => {
                    return(
                        <View key={city.route}>
                            <ListItem
                                styles={styles.list}
                                bottomDivider={true}
                            >
                                <ListItem.Content>
                                    <ListItem.Title> {city.title} </ListItem.Title>
                                </ListItem.Content>
                                <Icon                   // resolver achicar tamaño y direccionar
                                    reverse
                                    type='material-community'
                                    name='close'
                                    reverseColor='#c2c2c2'
                                    color='#fff'
                                    onPress={() => removeCity(city.route, city.title)}
                                />
                            </ListItem>
                        </View>
                    );
                })
            }
            <Icon
                reverse
                type='material-community'
                name='plus'
                color='#567aba'
                containerStyle={styles.addCities}
                onPress={() => navigation.navigate('add-city')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        
    },
    addCities: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});
