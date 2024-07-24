import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const AnimatedCircles = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, styles.circle1, {transform: [{rotate}]}]}
      />
      <Animated.View
        style={[styles.circle, styles.circle2, {transform: [{rotate}]}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  circle1: {
    zIndex: 100,
    backgroundColor: '#f7f3b8',
    top: 150, // Ajustez la position du cercle 1 par rapport au centre de l'image
    left: 50, // Ajustez la position du cercle 1 par rapport au centre de l'image
  },
  circle2: {
    zIndex: 100,
    backgroundColor: '#634776',
    top: -30, // Ajustez la position du cercle 2 par rapport au centre de l'image
    left: 50, // Ajustez la position du cercle 2 par rapport au centre de l'image
  },
});

export default AnimatedCircles;
