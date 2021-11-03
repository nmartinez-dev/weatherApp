import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import References from './References';
import Feedback from './Feedback';

export default function AboutUs () {
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text> En este componente se muestra quienes somos </Text>
            <View style={styles.btnContainer}>
                <Button
                    title='Referencias'
                    buttonStyle={styles.btn}
                    onPress= {() => setIsVisible(true)}
                />
                <Button
                    title='Feedback!'
                    buttonStyle={styles.btn}
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
        // flex: 1,
        
    },
    btn: {
        backgroundColor: '#188ea8',
        margin: 10,
        borderRadius: 8,
    },
});
