import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const JoinServerTab = () => {
  const onPress = () => {

  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, { backgroundColor: '#FFF' }]} >
      <Ionicons name={'git-network-outline'} size={25} color={'#0EE400'} />
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 5,
    marginLeft: 15,
  },
});


export default JoinServerTab;

