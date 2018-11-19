import React from 'react';
import {
   View,
   Text,
   Image,
   StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
   container: {
      flexDirection : 'row',
   },
   cover: {
      resizeMode : 'contain',
      height     : 150,
      width      : 100,
   },
   right: {
      justifyContent : 'space-between',
      paddingLeft    : 10,
   },
   title: {
     fontSize : 18,
     color    : '#44546b'
   },
   year: {
      paddingHorizontal : 6,
      backgroundColor   : '#70b124',
      paddingVertical   : 4,
      borderRadius      : 5,
      overflow          : 'hidden',
      alignSelf         : 'flex-start',
      color             : 'white',
      fontSize          : 11
   },
   rating: {
      fontWeight : 'bold',
      fontSize   : 14,
      color      : '#6b6b6b',
   },
   gender: {
      paddingHorizontal : 7,
      backgroundColor   : 'black',
      paddingVertical   : 5,
      position          : 'absolute',
      left              : 0,
      top               : 0,
   },
   genderText :{
      fontSize : 11,
      color    : 'white',
   }
});

function Suggestion(props){
   return(
      <View style={styles.container}>

         <View style={styles.left}>
            <Image
                style={styles.cover}
                source ={{uri: props.medium_cover_image }}
            />
            <View style={styles.gender}>
               <Text style={styles.genderText}>{props.genres[0]}</Text>
            </View>
         </View>

         <View style={styles.right}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.year}>{props.year}</Text>
            <Text style={styles.rating}>{props.rating} Estrellas</Text>
         </View>

      </View>
   )
}

export default Suggestion;