import React from 'react';
import {Text, StyleSheet,ImageBackground} from 'react-native';

const styles = StyleSheet.create({
   container : {
      paddingVertical : 30,
      paddingHorizontal: 10,
   },
   title : {
      marginBottom : 10,
      fontWeight   : 'bold',
      fontSize     : 20,
      color        : '#4c4c4c'
   }
});

function CategoryListLayout(props){
   return(
       <ImageBackground
         source={require('../../../assets/backgronund.png')}
         style={styles.container}>
             <Text style={styles.title} >{props.title}</Text>
             {props.children}
       </ImageBackground>
   )
}
export default CategoryListLayout