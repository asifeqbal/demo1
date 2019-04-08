import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
    Button
} from 'react-native';



export default class Description extends Component {
  render() {
    return (
        <Text style={styles.welcome}>The dial is the distinctive face of a Rolex watch, the feature most responsible for its identity and readability. Characterised by hour markers fashioned from 18 ct gold to prevent tarnishing, every Rolex dial is designed and manufactured in-house, largely by hand to ensure perfection</Text>
     
    );
  }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'stretch',
        margin: 10,
        color: '#0d1412',
        fontFamily: 'Cochin',
      },

});


