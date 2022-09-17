import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const DirectMessageTab = ({ }) => {
  const iconColor = useSharedValue('#555')

  const buttonBorderRadius = useSharedValue(100)
  const buttonBackgroundColor = useSharedValue('#FFF')
  
  const indicatorDisplay = useSharedValue('none')
  const indicatorWidth = useSharedValue(10)
  const indicatorHeight = useSharedValue(10)
  const indicatorBorderRadius = useSharedValue(100)

  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      color: iconColor.value
    }
  }, [])

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      borderRadius: buttonBorderRadius.value,
      backgroundColor: buttonBackgroundColor.value,
    }
  }, [])

  const indicatorAnimationStyle = useAnimatedStyle(() => {
    return {
      display: indicatorDisplay.value,
      width: indicatorWidth.value,
      height: indicatorHeight.value,
      borderRadius: indicatorBorderRadius.value,
    }
  }, [])

  const onPress = () => {
    iconColor.value = '#FFF'
    
    buttonBorderRadius.value = withTiming(15)
    buttonBackgroundColor.value = withTiming('#006CD3')
    
    indicatorDisplay.value = 'flex'
    indicatorWidth.value = withTiming(10)
    indicatorHeight.value = withTiming(55)
    indicatorBorderRadius.value = withTiming(15)
  }

  return (
    <View style={styles.container} >
      <Animated.View style={[styles.indicator, indicatorAnimationStyle]} />
      <AnimatedTouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.button, buttonAnimationStyle]} >
        <AnimatedIcon name={'chatbox'} size={25} style={iconAnimationStyle} />
      </AnimatedTouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    left: -5,
    backgroundColor: '#222',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 15,
  },
})


export default DirectMessageTab;

