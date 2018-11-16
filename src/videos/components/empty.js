import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container:{
      padding : 10,
   },
   text:{
      fontSize : 16
   }
});

function Empty(props){
   return(
       <View style={styles.container}>
          <Text style={styles.text}>{props.text}</Text>
       </View>
   )
}

export default Empty;