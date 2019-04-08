import React, {Component} from 'react';
import Description from './Description';


import {
    AppRegistry,
    Image,
    View,
    Text,
    StyleSheet,
    Button,
    Card,
} from 'react-native';



export default class ProductItem extends Component {
    constructor(props){
        super();
    }
  render() {
    let pic = {
        uri:'https://rukminim1.flixcart.com/image/832/832/watch/d/d/p/116233-rolex-original-imae9a857z6vzyrz.jpeg?q=70'
    };
    return (
        
     <View style={styles.container}>    
     <Image source={pic} style={{width:100, height:100, borderRadius: 10}}/>
     <Text style={styles.welcome}>Rolex DAY-DATE 40</Text>
     <Description/>
     
     <Button style={styles.button}   title="Add To Cart"
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
     justifyContent: 'center',
     alignItems: 'center',       
    backgroundColor: '#7ad7ff',    
        borderWidth: 1,
    borderRadius: 2,
    borderColor: '#061c26',
    borderBottomWidth: 0,
    shadowColor: '#197da8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,    
       
      },
      
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'stretch',
        margin: 10,
        color: '#422509',
        fontFamily: 'Cochin',
      },
      button:{
          width:20,
         

      }


});


