import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    View
} from 'react-native';



export default class ProductPage extends Component {
    constructor(props){
        super();
    }
  render() {
    let pic = {
        uri:'https://images3.alphacoders.com/715/715794.jpg'
    };
    return (
       
     <Image source={pic} style={{width:500, height:600, borderRadius: 10}}/>
     
    );
  }
}


