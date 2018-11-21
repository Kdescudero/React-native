import React from 'react';
import {
   View,
   Image,
   SafeAreaView,
   StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
   Logo: {
      width: 80,
      height: 26,
      resizeMode : 'contain',
   },
   container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'row'
   },
   right: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'flex-end',
   }
});

function Header(props){
   return(
       <View>
          <SafeAreaView>
             <View style={styles.container}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.right}>
                   {props.children}
                </View>
             </View>
          </SafeAreaView>
       </View>
   )
}

export default Header;