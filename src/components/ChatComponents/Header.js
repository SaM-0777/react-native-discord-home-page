import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header = () => {
  const onPress = () => {
    console.log('Pressed')
  }
  return (
    <View style={styles.container} >
      <View style={styles.leftContainer} >
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} >
          <Ionicons name={'menu'} size={27} color={'#6E6E6E'} />
        </TouchableOpacity>
        <Text style={styles.text} >@   SuyashNK</Text>
      </View>
      <View style={styles.rightContainer} >
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.iconContainer} >
          <Ionicons name={'call'} size={22} color={'#6E6E6E'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.iconContainer} >
          <Ionicons name={'videocam'} size={22} color={'#6E6E6E'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.iconContainer} >
          <Ionicons name={'people'} size={22} color={'#6E6E6E'} />
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});


export default Header;

