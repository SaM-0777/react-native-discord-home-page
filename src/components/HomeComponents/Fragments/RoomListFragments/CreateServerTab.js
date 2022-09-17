import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CreateServerTab = () => {
  const onPress = () => {
    
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, { backgroundColor: '#FFF' }]} >
      <Ionicons name={'add'} size={25} color={'#0EE400'} />
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
    marginLeft: 15,
  },
})


export default CreateServerTab;

