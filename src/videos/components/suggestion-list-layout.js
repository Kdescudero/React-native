import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container : {
      paddingVertical : 10,
      flex            : 1
   },
   title : {
      marginBottom : 10,
      marginLeft   : 8,
      fontWeight   : 'bold',
      fontSize     : 20,
      color        : '#4c4c4c'
   }
});

function SuggestionListLayout(props){
   return(
      <View style={styles.container}>
         <Text style={styles.title} >{props.title}</Text>
         {props.children}
      </View>
   )
}
export default SuggestionListLayout