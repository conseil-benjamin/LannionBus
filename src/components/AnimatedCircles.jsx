import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const AnimatedCircles = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotation, {
        //toValue: 1,
        //duration: 4500,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, []);

  const createCircleStyle = (baseStyles, top, left) => {
    const rotate = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const translateX = rotation.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, left, 20, -left, 20],
    });

    const translateY = rotation.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, top, top - 20, top, 0],
    });

    return [
      baseStyles,
      {
        top,
        left,
        transform: [
          { translateX },
          { translateY },
          { rotate },
        ],
      },
    ];
  };

  return (
    <View style={styles.container}>
      <Animated.View style={createCircleStyle(styles.circle, 150, 50)}>
        <View style={styles.circle1} />
      </Animated.View>
      <Animated.View style={createCircleStyle(styles.circle, -30, 50)}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    zIndex: 1,
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
