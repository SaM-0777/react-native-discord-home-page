import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { RoomList, Details } from '../../components';

import Styles from './Styles';


const Home = ({  }) => {
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View>
        <RoomList />
        <Details />
      </View>
    </View>
  )
};


export default Home;

