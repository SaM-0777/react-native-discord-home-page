import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CreateServerTab = () => {
  const onPress = () => {
    
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, { backgroundColor: '#0EE400' }]} >
      <Ionicons name={'add'} size={25} color={'#FFF'} />
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginLeft: 15,
  },
})


export default CreateServerTab;

