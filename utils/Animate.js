import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Sun from '../assets/img/sun.png';
import Navigation from '../navigation/Navigation';

export default function Animate (props) {
    const { theme } = props;

    const [animated, setAnimated] = useState(false);
    const [name] = useState(new Animated.Value(0));
    const [show] = useState(new Animated.Value(0));
    const [size] = useState(new Animated.Value(1));

    const spinRotation = new Animated.Value(0);
    const rotation = spinRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
    })

    useEffect(() => {
        Animated.timing(name, {
            toValue: 1,
            duration: 1000,
            delay: 1000,
            useNativeDriver: false,
        }).start(() =>
        Animated.timing(show, {
            toValue: 1,
            duration: 1000,
            delay: 1000,
            useNativeDriver: false,
        }).start(() =>
        Animated.parallel([
            Animated.timing(name, {
                toValue: 0,
                duration: 400,
                delay: 400,
                useNativeDriver: false,
            }),
            Animated.timing(size, {
                toValue: 15,
                duration: 1500,
                delay: 500,
                useNativeDriver: false,
            }),
            Animated.timing(spinRotation, {
                toValue: 1,
                duration: 1500,
                delay: 500,
                useNativeDriver: false,
            }),
        ]).start(() => setAnimated(true))))
    }, []);

    if (!animated) {
        return (
            <View style={[styles.container, theme.backgroundColor]}>
                <Animated.Text
                    style={[styles.name, {opacity: name}]}
                > ¡ WeatherApp !
                </Animated.Text>
                <Animated.Image
                    style={[styles.image, {opacity: show, transform: [{scale: size}, {rotate: rotation}]}]}
                    source={Sun}
                /> 
            </View>
        );
    } else {
        return (
            <Navigation theme={theme} />
        );
    };
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
});
