import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import References from './References';
import Feedback from './Feedback';

export default function AboutUs () {
    const { colors } = useTheme();

    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text> En este componente se muestra quienes somos </Text>
            <View style={styles.btnContainer}>
                <Button
                    title='Referencias'
                    buttonStyle={[styles.btn, colors.background]}
                    onPress= {() => setIsVisible(true)}
                />
                <Button
                    title='Feedback!'
                    buttonStyle={[styles.btn, colors.background]}
                    onPress={() => setVisible(true)}
                />
            </View>
            <References isVisible={isVisible} setIsVisible={setIsVisible} />
            <Feedback visible={visible} setVisible={setVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {

    },
    btn: {
        margin: 10,
        borderRadius: 8,
    },
});
