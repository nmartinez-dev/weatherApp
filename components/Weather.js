import React, { useState, useEffect } from 'react';
import { Button, Overlay, Icon } from 'react-native-elements';
import { StyleSheet, View, Alert, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Weather = ({ weather, saveWeather, status, saveStatus, visibleWeather, setVisibleWeather }) => {
    const { colors } = useTheme();
    const { bgClima, saveBGClima }=useState({backgroundColor:'#188ea8'})
    const [resultado, guardarResultado] = useState({});

    // el use useEffect se ejecuta al pulsar una ciudad de la lista
    // contine la peticion a openweathermap para obtener el clima.
    useEffect(() => {
        const weatherReq = async(weather) => {
            if (weather) {
                // datos de la api del clima.
                const appId = 'fc8ff9f409f52b1cc6757e25a0ceac04'; //cargar el token en appId
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${weather},argentina&appid=${appId}`;
                console.log(url);

                // en caso de que tenga algun error saco una excepcion
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    console.log(resultado.cod);
                    guardarResultado(resultado);
                    saveWeather(weather);
                    saveStatus(false);

                    // si la ciudad a consultar no esta diponible se envia una alerta
                    // al usuario indicando que la ciudad no esta disponible.
                    if (resultado.cod === '404') {
                        showAlert();
                    };
                } catch (e) {
                    console.log('La ciudad selecionada no se encuentra.');
                };
            };
        };
        weatherReq(weather);
    }, [status]);



    const showAlert = () => {
        Alert.alert (
            'Error',
            'No hay resultado para la ciudad, intenta con otra Ciudad',
            [{ text:'Ok' }]
        );
    };

    // como el clima nos trae la temperatura en grados kelvin
    // usamos un factor de conversion para poder leer en grados
    // centigrados
    const {name, main} = resultado;
    const kelvin = 273.15;


    // al retornar verificamos si al pulsar la ciudad esta esta
    // disponible para consultar el clima si no lo esta se envia
    // retornamos debajo de las ciudades un view indicado esto.
    if (!main) {
        return (
            <>
                <View>
                    <Text style={styles.alert}>
                        La ciudad {weather} no se encuentra, intente con otra.
                    </Text>
                </View>
            </>
        );
    } else {
        return (
            <>
                <Overlay
                    visible={visibleWeather}
                    backdropStyle={{ backgroundColor: '#00000044' }}
                    overlayStyle={[styles.overlay, colors.background]}
                    overlayBackgroundColor='red'
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    onBackdropPress={() => setVisibleWeather(false)}
                >
                    <View style={[styles.clima, colors.background]}>
                        <Text style={[styles.texto, styles.actual]}>
                            {parseInt(main.temp-kelvin)}
                            <Text style={styles.temperatura}> &#x2103; </Text>
                            <Image
                                style={{ width: 66, height: 58 }}
                                source={{ uri:`http://openweathermap.org/img/w/${resultado.weather[0].icon}.png` }}
                            />
                        </Text>
                        <View style={styles.temperaturas}>
                            <Text style={styles.texto}> Min {' '}
                                <Text style={styles.temperatura}>
                                    {parseInt(main.temp_min-kelvin)} &#x2103;
                                </Text>
                            </Text>
                            <Text style={styles.texto}> Max {' '}
                                <Text style={styles.temperatura}>
                                    {parseInt(main.temp_max-kelvin)} &#x2103;
                                </Text>
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.texto}> {weather} </Text>
                        </View>
                    </View>
                    <Button
                        title='Cerrar'
                        titleStyle={{ color: '#000' }}
                        buttonStyle={[styles.closeOverlay, colors.background]}
                        onPress= {() => setVisibleWeather(false)}
                        icon={
                            <Icon
                                type='material-community'
                                name='close'
                                color='#000'
                                size={17}
                            />
                        }
                    />

                </Overlay>
            </>
        );
    };
};

const styles = StyleSheet.create ({
    clima: {
        alignItems: 'center',
        marginBottom: 20,
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20,
    },
    alert: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold',
    },
    temperatura: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    temperaturas: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    overlay: {
        height: 'auto',
        width: 'auto',
        padding: 30,
        borderRadius: 8,

    },
    closeOverlay: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 40,
    },
});

export default Weather;
