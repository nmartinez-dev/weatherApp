import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

export default function AboutUs () {

    // const references = () => {
    //     return (
    //         <Overlay
    //             isVisible={true}
    //             windowBackgroundColor='rgba(0, 0, 0, 0.5)'
    //             overlayBackgroundColor='transparent'
    //             overlayStyle={styles.overlay}
    //             // onBackdropPress={closeModal}
    //         >
    //             <Text> Aca van las referencias y enlaces externos </Text>
    //         </Overlay>
    //     );
    // };

    return (
        <View style={styles.container}>
            <Text> En este componente se muestra quienes somos </Text>
            <View style={styles.btnContainer}>
                <Button
                    title='Referencias'
                    buttonStyle={styles.btn}
                    // onPress={references}
                />
                <Button
                    title='Feedback!'
                    buttonStyle={styles.btn}
                    // onPress={References()}
                />
            </View>
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
    overlay: {
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff',
    },
});
