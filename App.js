/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Home } from './src/screens';


/*
$FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
LTI update could not be added via codemod
*/


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <GestureHandlerRootView>
        <Home />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
};


export default App;

