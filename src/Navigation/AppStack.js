import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Home, Chat } from '../screens';


const AppStack = () => {
  return (
    <View style={styles.container} >
      <View style={styles.gestureDetectorContainer} />
      <Home />
      <Chat />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  /*homeContainer: {
    flex: 2,
  },
  chatContainer: {
    flex: 1
  },*/
  gestureDetectorContainer: {
    ...StyleSheet.absoluteFillObject,
    /*backgroundColor: 'red',
    opacity: 0.2,*/
    zIndex: 2,
  },
});


export default AppStack;

