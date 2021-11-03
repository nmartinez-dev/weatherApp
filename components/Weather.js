import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert, Text, Image } from 'react-native';

const Weather=({weather, saveWeather, status, saveStatus})=>{
  const [resultado, guardarResultado]=useState({})

  useEffect(()=>{
  const weatherReq=async(weather)=>{
    if (weather){
      // datos de la api del clima.
      const appId='fc8ff9f409f52b1cc6757e25a0ceac04'
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${weather},argentina&appid=${appId}`;
      console.log(url)

      // en caso de que tenga algun error saco una excepcion
      try {
        const respuesta= await fetch(url);
        const resultado= await respuesta.json();
        console.log(resultado.cod)
        guardarResultado(resultado);
        saveWeather(weather);
        saveStatus(false);
        if(resultado.cod==='404'){
          showAlert();
        }
      } catch (e) {
        console.log('La ciudad selecionada no se encuentra.');

      }
    }
  };
  weatherReq(weather);
}, [status]);

  const showAlert=()=>{
    Alert.alert(
      'Error',
      'No hay resultado para la ciudad, intenta con otra Ciudad',
      [{text:'Ok'}]
    )
  };
  const {name, main}=resultado;
  const kelvin=273.15;
  if(!main){
      return (
        <>
        <View>
          <Text style={styles.alert}>La ciudad {weather} no se encuentra, intente con otra.</Text>
        </View>
        </>
      );
  } else {
  return (
    <>
    <View style={styles.clima}>
      <Text style={[styles.texto, styles.actual]}>
        {parseInt(main.temp-kelvin)}
        <Text style={styles.temperatura}>
          &#x2103;
        </Text>
        <Image
          style={{width:66, height:58}}
          source={{uri:`http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`}}
        />
      </Text>
      <View style={styles.temperaturas}>
        <Text style={styles.texto}>Min {' '}
          <Text style={styles.temperatura}>
            {parseInt(main.temp_min-kelvin)} &#x2103;
          </Text>
        </Text>

        <Text style={styles.texto}>Max {' '}
          <Text style={styles.temperatura}>
            {parseInt(main.temp_max-kelvin)} &#x2103;
          </Text>
        </Text>
      </View>

      <View>
        <Text style={styles.texto}>{weather}</Text>
      </View>
    </View>
    </>
  );
}
}
const styles=StyleSheet.create({
  clima:{
    marginBottom:20
  },
  texto:{
    color:'#FFF',
    fontSize:20,
    textAlign:'center',
    marginRight:20
  },
  alert:{
    color:'#FFF',
    fontSize:30,
    textAlign:'center'
  },
  actual:{
    fontSize:80,
    marginRight:0,
    fontWeight:'bold'
  },
  temperatura:{
    fontSize:24,
    fontWeight:'bold'
  },
  temperaturas:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
export default Weather;