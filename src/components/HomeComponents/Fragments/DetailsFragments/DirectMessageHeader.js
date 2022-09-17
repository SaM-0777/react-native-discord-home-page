import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DirectMessageHeader = ({ }) => {
  const onPress = () => {
    
  }

  return (
    <View style={styles.container} >
      <View style={styles.headerContainer} >
        <Text style={styles.headerText} >Direct Messages</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer} >
          <Ionicons name={'chatbox'} size={25} color={'#787878'} />
          <Ionicons name={'add-sharp'} size={12} color={'#787878'} style={styles.absIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.searchContainer} >
        <Text>Find or start a conversation</Text>
        <Ionicons name={'search-sharp'} size={20} color={'#'} />
      </TouchableOpacity>
      <View>

      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  iconContainer: {},
  absIcon: {
    position: 'absolute',
    top: -4,
    right: -5,
    padding: 1,
    borderRadius: 100,
    backgroundColor: '#FFF',
  },
  searchContainer: {
    width: '100%',
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#B5B5B5',
  },
})


export default DirectMessageHeader;

