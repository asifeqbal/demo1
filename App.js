/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image} from 'react-native';
import ProductPage from './components/ProductPage';
import TextBox from './components/textBox';
import ProductItem from './components/ProductItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>        
        <Image
          style={{width:700,height:200}}
         source={{uri:'https://www.desktop-background.com/p/2015/10/16/1027496_hd-stunning-island-in-the-sea-ocean-wallpapers-high-resolution-full_2560x1600_h.jpg'}} />
         <Text style={styles.welcome}>Hello</Text>
        {/* <ProductPage/> */}
        <TextBox/>
        <ProductItem/>

        
         
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

   
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ce4412',
    fontFamily: 'Cochin',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },  
  button:{
    color:"black"
  }
});
