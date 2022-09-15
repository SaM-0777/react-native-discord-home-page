import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


const ServerTab = ({ image }) => {
  const indicatorValue = useSharedValue(0)

  const indicatorAnimationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(12),
      height: withTiming(55),
      backgroundColor: withTiming('#006CD3'),
    }
  })

  const onPress = () => {
    
  }

  return (
    <View style={styles.container} >
      <Animated.View style={[styles.indicator, indicatorAnimationStyle]} />
      <TouchableOpacity activeOpacity={0.95} onPress={onPress} style={styles.buttonContainer} >
        <Image source={image} resizeMode={'contain'} style={[styles.image, { borderRadius: 100 /*20*/ } ]} />
      </TouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginLeft: 15,
    marginVertical: 5,
  },
  indicator: {
    position: 'absolute',
    left: -5,
    backgroundColor: '#222',
  },
  image: {
    width: 60,
    height: 60,
  },
});


export default ServerTab;

