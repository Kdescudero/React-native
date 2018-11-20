import React from 'react';
import {
   View,
   Image,
   StyleSheet,
   ActivityIndicator,
} from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
   },
   logo:{
      marginBottom: 10,
      width: 200,
      height: 80,
      resizeMode: 'contain'
   }
});

function Loading(props){
   return(
       <View style={styles.container}>
          <Image
              source={require('../../../assets/logo.png')}
              style={styles.logo}
          />
          <ActivityIndicator size="large" color="red" />
       </View>
   )
}
export default Loading