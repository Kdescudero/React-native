import React from 'react';
import {
   View,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   TouchableHighlight,
   TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
   // container:{
   //    justifyContent: 'center',
   //    paddingHorizontal: 10,
   //    height: 25,
   //    marginRight: 10,
   //    marginVertical: 5,
   //    borderWidth: 1,
   //    borderRadius: 10,
   //    borderColor: 'white',
   //    backgroundColor: 'gray'
   // }
});

function PlayPause(props){
   return(
       <TouchableHighlight
           onPress={props.onPress}
           style={styles.container}
           underlayColor="transparent"
           hitSlop={{ left: 5,top: 5,bottom: 5,right: 5 }}
       >
          {props.paused ?
              <Icon name="play-arrow" size={20} color='red'/>
              :
              <Icon name="pause" size={20} color='red' />
          }
       </TouchableHighlight>
   )
}

export default PlayPause