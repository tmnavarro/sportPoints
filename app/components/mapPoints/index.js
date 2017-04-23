/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button,
} from 'native-base';


import Themplate from '../themplate';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
 container: {
   height: 400,
   width: 400,
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   width: 400,
   height: 400,
 },
});

class MapPoints extends Component {

  render() {

    const content = (
      <View style ={styles.container}>
         <MapView
           style={styles.map}
           region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,
           }}
         >
         </MapView>
       </View>
    );

    return (<Themplate content={content} />)
  }
}

export default MapPoints;
