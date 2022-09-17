import React from 'react';
import { View, Text } from 'react-native';

import { RoomBody, RoomHeader, DirectMessageBody, DirectMessageHeader } from './Fragments';

import { detailsStyle } from './Styles';


const Details = ({  }) => {
  return (
    <View style={detailsStyle.container} >
      <DirectMessageHeader />
      <DirectMessageBody />
    </View>
  )
};


export default Details;

