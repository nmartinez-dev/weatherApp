import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Overlay, Icon } from 'react-native-elements';
import * as Linking from 'expo-linking';

export default function References (props) {
    const { isVisible, setIsVisible } = props;

    return (
        <Overlay
            isVisible={isVisible}
            backdropStyle={{ backgroundColor: '#00000030' }}
            overlayStyle={styles.overlay}
            onBackdropPress={() => setIsVisible(false)}
        >
            <View style={styles.overlayTitle}>
                <Text style={styles.title}> Bibliotecas y Frameworks </Text>
            </View>
            <View style={styles.overlayContent}>
                <Text style={styles.overlayContentTitle}> Expo: </Text>
                <Text onPress={() => Linking.openURL('https://expo.dev')}>
                    https://expo.dev/
                </Text>
                <Text style={styles.overlayContentTitle}> React Native: </Text>
                <Text onPress={() => Linking.openURL('https://reactnative.dev/')}>
                    https://reactnative.dev/
                </Text>
                <Text style={styles.overlayContentTitle}> React Navigation: </Text>
                <Text onPress={() => Linking.openURL('https://reactnavigation.org/')}>
                    https://reactnavigation.org/
                </Text>
                <Text style={styles.overlayContentTitle}> React Native Elements: </Text>
                <Text onPress={() => Linking.openURL('https://reactnativeelements.com/')}>
                    https://reactnativeelements.com/
                </Text>
            </View>
            <Button
                title='Cerrar'
                titleStyle={{ color: '#000' }}
                buttonStyle={styles.closeOverlay}
                onPress= {() => setIsVisible(false)}
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
    );
};

const styles = StyleSheet.create ({
    overlay: {
        height: 'auto',
        width: 'auto',
        backgroundColor: '#188ea8',
        padding: 30,
        borderRadius: 8,
    },
    overlayTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlayContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContentTitle: {
        fontWeight: 'bold',
        marginTop: 20,
    },
    closeOverlay: {
        backgroundColor: '#188ea8',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 40,
    },
});
