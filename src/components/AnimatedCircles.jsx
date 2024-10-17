import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const AnimatedCircles = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, []);

  // On réduit la valeur du rayon ici pour rapprocher les cercles
  const createCircleStyle = (radius, offsetAngle = 0) => {
    const rotate = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: [`${offsetAngle}deg`, `${360 + offsetAngle}deg`],
    });

    return {
      position: 'absolute',
      transform: [
        { rotate },
        { translateX: radius }, // Distance radiale contrôlée ici
      ],
    };
  };

  return (
    <View style={styles.container}>
      {/* Cercle jaune, commence en haut (offsetAngle = 0) */}
      <Animated.View style={[styles.circle, createCircleStyle(90, 0)]}>
        <View style={styles.circle1} />
      </Animated.View>

      {/* Cercle violet, commence en bas (offsetAngle = 180) */}
      <Animated.View style={[styles.circle, createCircleStyle(90, 180)]}>
        <View style={styles.circle2} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    marginLeft: '15%',
    marginTop: '15%',
  },
  circle: {
    width: 50,
    height: 50,
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f7f3b8',
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#634776',
  },
});

export default AnimatedCircles;
