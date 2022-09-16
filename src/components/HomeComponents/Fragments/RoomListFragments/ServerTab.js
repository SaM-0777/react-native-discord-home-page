import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


const ServerTab = ({ image }) => {
  const indicatorWidth = useSharedValue(10)
  const indicatorHeight = useSharedValue(10)
  const indicatorBorderRadius = useSharedValue(100)
  const indicatorBackgroundColor = useSharedValue('#444')

  const imageBorderRadius = useSharedValue(100)

  const indicatorAnimationStyle = useAnimatedStyle(() => {
    return {
      width: indicatorWidth.value,
      height: indicatorHeight.value,
      borderRadius: indicatorBorderRadius.value,
      backgroundColor: indicatorBackgroundColor.value,
    }
  }, [])

  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      borderRadius: imageBorderRadius.value,
    }
  }, [])

  const onPress = () => {
    indicatorWidth.value = withTiming(10)
    indicatorHeight.value = withTiming(55)
    indicatorBorderRadius.value = withTiming(15)
    indicatorBackgroundColor.value = withTiming('#000')

    imageBorderRadius.value = withTiming(20)
    // postData()
    // getData()
  }

  /*const postData = async () => {
    try {
      const response = await fetch('http://localhost:8800/api/camp/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Soumya',
          address: 'IIIT DWD',
          coordinator: 'Rishav',
          mobile: '788555',
          email: 'asdlkds@gmail.com'
        })
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8800/api/donar/', {
        method: 'GET',
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }*/
 
  return (
    <View style={styles.container} >
      <Animated.View style={[styles.indicator, indicatorAnimationStyle]} />
      <TouchableOpacity activeOpacity={0.95} onPress={onPress} style={styles.buttonContainer} >
        <Animated.Image source={image} resizeMode={'cover'} style={[styles.image, imageAnimationStyle]} />
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

