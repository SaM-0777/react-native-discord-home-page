import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Animated } from 'react-native';

import { DirectMessageTab, ServerTab, CreateServerTab, JoinServerTab, } from './Fragments';

import data from '../../utils/data';


const RoomList = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
    console.log(viewableItems)
  })

  return (
    <View>
      <DirectMessageTab />
      <FlatList
        data={data}
        renderItem={({ item }) => <ServerTab image={item.image} />}
        keyExtractor={(item) => item.id}
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
      />
      <CreateServerTab />
      <JoinServerTab />
    </View>
  )
};


export default RoomList;

