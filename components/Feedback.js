import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Overlay, Button, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export default function Feedback (props) {
    const { visible, setVisible } = props;
    const { colors } = useTheme();

    return (
        <Overlay
            isVisible={visible}
            backdropStyle={{ backgroundColor: '#00000030' }}
            overlayStyle={[styles.overlay, colors.background]}
            onBackdropPress={() => setVisible(false)}
        >
            <Text style={styles.title}> ¡ Tu opinión es importante para nosotros ! </Text>
            <Text style={styles.link} onPress={() => Linking.openURL('mailto: weatherapp.ibm@gmail.com')}>
                Enviar email
                <Icon
                    type='material-community'
                    name='open-in-new'
                    color='#000'
                    size={17}
                />
            </Text>
            <Button
                title='Cerrar'
                titleStyle={{ color: '#000' }}
                buttonStyle={[styles.closeOverlay, colors.background]}
                onPress= {() => setVisible(false)}
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
        width: '90%',
        padding: 30,
        borderRadius: 8,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    link: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
    },
    closeOverlay: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 40,
    },
});
