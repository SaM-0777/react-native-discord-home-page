import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { RoomList, Details } from '../../components';

import Styles from './Styles';


const Home = ({  }) => {
  return (
    <View>
      <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
      <View style={Styles.container} >
        <View style={Styles.roomListContainer} >
          <RoomList />
        </View>
        <View style={Styles.detailsContainer} >
          <Details />
        </View>
      </View>
    </View>
  )
};


export default Home;

