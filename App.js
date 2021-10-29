import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cities from './components/Cities'
import Forms from './components/Forms'
export default function App() {
  return (
    <View style={styles.container}>
      <Text> wheatherApp - IBM SkillsBuild </Text>
      <StatusBar style="auto" />
      <Forms/>
      <Cities/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
