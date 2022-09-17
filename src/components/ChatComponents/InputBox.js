import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const InputBox = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button} >
        <Ionicons name={'add'} size={20} color={''} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Ionicons name={'gift'} size={20} color={''} />
      </TouchableOpacity>
      <View style={styles.textContainer} >
        <TextInput style={styles.input} placeholder={'Message @SuyashNK'} />
        <TouchableOpacity style={styles.emoteButton} >
          <Ionicons name={'happy'} size={20} color={''} />
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
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomColor: '#E0E0E0',
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#E5E5E5',
  },
  textContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: '#E5E5E5',
  },
  input: {
    width: 290,
    height: 34,
    fontSize: 14,
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  emoteButton: {},
})


export default InputBox;

