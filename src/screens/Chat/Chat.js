import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import { Header, InputBox } from '../../components';

import Styles from './Styles';


const Chat = () => {
  return (
    <View style={Styles.container} >
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View style={{ flex: 1, }} >
        <Header />
        <View style={Styles.line} />
      </View>
      <View style={Styles.inputContainer} >
        <InputBox />
      </View>
    </View>
  )
};


export default Chat;

