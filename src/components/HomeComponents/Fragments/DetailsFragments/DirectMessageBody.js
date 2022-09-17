import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';


const DirectMessageBody = ({ }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} >
      {[...Array(8).keys()].map(index => {
        return (
          <TouchableOpacity activeOpacity={0.9} key={index} style={styles.tab} >
            <View>
              <Image source={require(`../../../../assets/images/person-${index + 1}.jpg`)} resizeMode={'cover'} style={styles.image} />
            </View>
            <Text style={styles.text} >John Doe</Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  content: {
    paddingBottom: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
});


export default DirectMessageBody;

