import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

export default function Loading (props) {
    const { isVisible, text, theme } = props;

    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={[styles.overlay, theme.border]}
        >
            <View style={styles.view}>
                <ActivityIndicator size='large' color={theme.text.color} />
                <Text style={[styles.text, theme.text]}> {text} </Text>
            </View>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
    },
});
