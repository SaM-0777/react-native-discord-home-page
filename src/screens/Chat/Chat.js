import React from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';

import { Header, InputBox } from '../../components';

import Styles from './Styles';


const Chat = ({ }) => {
  const onPress = () => {

  }

  return (
    <View style={Styles.container} >
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <TouchableOpacity activeOpacity={0.2} onPress={onPress} style={Styles.scrollButton} />
      <View style={Styles.headerContainer} >
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

