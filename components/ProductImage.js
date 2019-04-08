import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
    Button
} from 'react-native';



export default class ProductImage extends Component {
  render() {
    return (
        <View>
            <Image
                    source={require('https://supermariorun.com/assets/img/hero/hero_chara_mario_pc.png')}
                    />
        </View>
     
    );
  }
}


