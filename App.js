/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, SafeAreaView, View, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Home, Chat } from './src/screens';


/*
$FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
LTI update could not be added via codemod
*/


const App = ({  }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container} >
        {/*<Home />*/}
        <Chat />
      </View>
    </GestureHandlerRootView>
  )
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    /*width: '100%',
    height: '100%',*/
    // justifyContent: 'center',
    backgroundColor: "#F5F5F5",
  },
})


export default App;

